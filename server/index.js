const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('./config/key')
const { auth } = require("./middleware/auth")
const { User } = require("./models/User")

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

//application.json
app.use(bodyParser.json())
app.use(cookieParser())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  // mongoose 6버전 이하에서만 적용할 것
  // userNewUrlParser: true, 
  // useUnifiedTopology: true, 
  // useCreateIndex: true, 
  // useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res)=> res.send('Hello World++'))

app.post('/api/users/register', (req, res) => {

  //회원 가입 필수 정보들을 client에서 가져와 DB에 넣어준다
  const user = new User(req.body)

  user.save((err, userInfo) => {    
    if(err) return res.json({success: false, err})
    
    return res.status(200).json({
      success: true
    })
  })
})

app.post('/api/users/login', (req, res) => {

  // req email 찾기
  User.findOne({email: req.body.email}, (err, user) => {
    
    if(!user){
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }

    // req email이 존재, 해당 비밀번호가 맞는지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {

      if(!isMatch)
        return res.json({loginSuccess: false, message: "비밀번호가 틀렸습니다."})

      // password가 일치하면 토큰 생성하기
      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err)

        // token save -> 'cookies' vs local storage
        res.cookie("x_auth", user.token)
          .status(200)
          .json({loginSuccess: true, userId: user._id})
      })  
    })
  })
})

app.get('/api/users/auth', auth, (req, res) => {

  // auth -> middleware를 통과했기때문에 Authentication = true
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ?  false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})

app.get('/api/users/logout', auth, (req, res) => {

  User.findOneAndUpdate(
    { _id: req.user._id},
    { token: ""},
    (err, user) =>{
      if(err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true
      })
    })
})

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))