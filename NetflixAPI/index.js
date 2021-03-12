const express = require('express')
const app = express() // initialize express
const port = 3000  // setting the port 
//using the get method

app.use(express.json()) // parses data  

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true}); 
mongo "mongodb+srv://cluster0.dkezm.mongodb.net/<dbname>" --username andrius

app.get('/', (req, res) => {
  res.send('Go Vegan, right now!')
})



app.post('/login', (req, res) => {
 const password = req.body.password;
 const email = req.body.email;
 const validUser = {
   email: "123@mail.com",
   pass: "1234"
   if(email == validUser.email && password == validUser.password)
 }
 {
   res.send{
    'valid'
   }
   
 } 
 else {
   res.send{404, {
     status: 'Invalid'

   }}

 }
  console.log(req.body);
  res.send('Go Vegan, right now!')
})



// start application
// listening to the
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



