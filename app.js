const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! Sender!!!!!");
});
 
module.exports.app = app;
