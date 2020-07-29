const request= require('request')

const forecast=(latitude,longitude,callback)=>{
 const url='http://api.weatherstack.com/current?access_key=e7d9a3304c199c4c3d5fd6e20cfdb8fd&query='+ latitude + ',' + longitude + '&units=m'
 request({url, json: true},(error, {body})=>{
     if(error){
         callback('Unable to connect with weahter service!',undefined)
     } else if(body.error){
        callback('Unable to find location!',undefined)
     } else{
            callback(undefined,body.current.weather_descriptions[0]+ ". It is currently "+body.current.temperature+" degrees out. It feels like "+body.current.feelslike+" degrees out. The humidity will be "+body.current.humidity)
        }
 })

}

module.exports=forecast