var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));

app.get("/ucrev", function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log('this is my data in server get ', data)
      res.json(data)
    }
  });

});


app.post("/ucrev", function(req,res) {

  console.log('immmmm hereeee ', req.body)
  cars.save(req.body);
  res.end('testing');
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
