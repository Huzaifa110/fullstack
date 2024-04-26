const express = require('express');
const app = express();
const port = 8000;
const mongoDB = require("./db");
mongoDB();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Method", 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use('/api', require("./routes/login"));
app.use('/api', require("./routes/register"));
app.use('/api', require("./routes/dishes"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});