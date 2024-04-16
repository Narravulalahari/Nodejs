const dotenv=require('dotenv')
//configure the config file
dotenv.config({path:'./config/config.env'})
let devURL=process.env.DEV_URL
console.log(`dev url:${devURL}`)
