module.exports = {

		requrieAuthentication: function(req,res,next){
			console.log('private route hit');
			next();
		},
		
		logger: function(req,res,next){
			console.log(req.method);
			next();
		}
	
}