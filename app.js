const express = require('express');
const app = express()
const port = 3000

app.use(express.static('/public'));

app.get('/sounds/music.mp3', function(req, res) {
  res.sendFile(__dirname + '/sounds/music.wav');
});

app.get('/sounds/shoot.wav', function(req, res) {
  res.sendFile(__dirname + '/sounds/shoot.wav');
});

app.get('/sounds/bounce.mp3', function(req, res) {
  res.sendFile(__dirname + '/sounds/bounce.mp3');
});

app.get('/main.js', function(req, res) {
  res.sendFile(__dirname + '/main.js');
});

app.get('/sound.js', function(req, res) {
  res.sendFile(__dirname + '/sound.js');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html" );
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port2 = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port2)
})