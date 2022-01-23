const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 5000

const bodyParser = require('body-parser')
const config = require('./config/key')
const { User } = require("./models/User")

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

//application.json
app.use(bodyParser.json())

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

app.post('/register', (req, res) => {

  //회원 가입 필수 정보들을 client에서 가져와 DB에 넣어준다
  const user = new User(req.body)
  user.save((err, doc) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))