var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
var port = process.env.PORT || 1337;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

var replyCounter = 0;

app.post('/', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : userName + ', It doesn\'t matter. Let do tachos instead ¯|_(ツ)_|¯'
  };
  // Loop otherwise..
  if (userName == 'simonerebaudengo') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});