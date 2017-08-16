var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'assets/' });


app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/filesize", upload.single('myfile') , (req, res) => {
  var obj ={
    size: req.file.size
  };
  res.send(obj)
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
