const express = require('express');
const controller=require('./controller')
const app = express();
const port = 5000;
var cors=require('cors')
app.use(cors())
app.use(express.json()) //to use api in browser
require('dotenv').config()
app.get('/', (req, res) => {
  res.send('news api backend is ready!');
});

app.use('/api',controller)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});