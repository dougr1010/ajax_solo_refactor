var express = require('express');
var j = require('./models/data.json');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(request, response){
    console.log("hit / endpoint");
    response.sendfile(__dirname + '/public/views/index.html');
});

app.get('/getColors',function(request, response){
    console.log("hit getColors endpoint");
    response.send(j);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listening on address: ' + port);
});

module.export=app;