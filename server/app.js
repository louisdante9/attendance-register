import express from 'express';
import bodyParser from 'body-parser';

var app = express();

app.get('/', function(req, res){
  res.send('hello there, this is working!');
}).listen(4000, function(){
  console.log('app is running on port 4000')
});
