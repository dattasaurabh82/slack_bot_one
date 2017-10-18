var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
var port = process.env.PORT || 1337;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
// test route
// app.get('/', function (req, res) { 
//     res.status(200).send('Hello world!'); 
// });

var replyCounter = 0;

app.post('/hello', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello ' + userName + ', How are you doing?'
  };
  // Loop otherwise..
  if (userName == 'dattasaurabh82') {
    return res.status(200).json(botPayload);
    replyCounter++;
  } else {
    return res.status(200).end();
  }
});

app.post('/', function(req, res, next){
  var userName = req.body.user_name;
  var botPayloadOne = {
    text : 'Nothing matters'
  };
  // Loop otherwise..
  if (userName == 'dattasaurabh82') {
    if(replyCounter == 1){
      return res.status(200).json(botPayloadOne);
      replyCounter = 0;  
    }
  } else {
    return res.status(200).end();
  }

});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});