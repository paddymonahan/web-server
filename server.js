var PORT = 3000; //capitals mean that port is a constant
var express = require('express');
var app = express();
var middleware = require('./middleware.js');



app.use(middleware.logger);

// app.use(middleware.requrieAuthentication);
//app.use adds application level middleware (APPWIDE)

//route specific middleware add middleware as second argument of route
app.get('/about',middleware.requrieAuthentication ,function(req,res){
	res.send('I\'m making a server');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

app.listen(PORT,function(){
	console.log('Server is up on port '+PORT);
});