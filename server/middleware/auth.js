const { User } = require('../models/User')


let auth = (req, res, next) => {
  
  // auth 과정 처리
  // client cookie에서 token 가져오기
  let token = req.cookies.x_auth

  // token decryption 처리
  User.findByToken(token, (err, user) => {
    if(err) throw err;
    if(!user) return res.json({isAuth: false, error: true})

    req.token = token
    req.user = user
    
    next()
  })

  // user가 있으면 인증 okay

  // user가 없으면 인증 no


}

module.exports = { auth }