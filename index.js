const express=require('express')
const myApp=express()
myApp.get('/',(req,res)=>{
  res.send('Hello Worls from express.js')
})
myApp.get('/about',(req,res)=>{
  res.send('Hello Worls from express.js about')
})

myApp.listen(3000,()=>{console.log('express Running')})