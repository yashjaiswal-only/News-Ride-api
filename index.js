const express = require('express');
const controller=require('./controller')
const app = express();
const port = 5000;
var cors=require('cors')
app.use(cors())
app.use(express.json()) //to use api in browser
require('dotenv').config()

app.use('/api',controller)

app.get('/', (req, res) => {
  res.send('news api backend is ready!');
});

//this builds express server in port 5000 
app.listen(process.env.PORT || 5000,()=>{
    console.log("backend server is running");
})