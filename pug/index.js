const express = require('express')
const app = express()
const port = 3000
app.set('view engine','pug')

// app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/', (req, res) => res.render('index.pug'))
app.get('/home',(req,res)=>{
  res.render('home.pug')
})
app.get('/contact',(req,res)=>{
  res.render('contact.pug')
})
app.get('/', (req, res) => res.render('index',{name:'Silas',phone:'1-866-929-2429'}))
app.listen(port, () => console.log(`Example app listening on port !`))