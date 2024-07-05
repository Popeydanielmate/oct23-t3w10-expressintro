

function readAuthData(request, response, next){
}


function verifyAuthData(request, response, next){
}

async function exampleAsyncMiddleware(request, response, next){
	console.log("Called from async middleware");
	next();
}


module.exports = {
	readAuthData, verifyAuthData,
	exampleAsyncMiddleware
};

/*

request comes in to the server
match a route 
run middleware on route
response once all middleware is done 

	instance.verb(
		path, 
		middleware01,
			next()
		middleware02,
			next()
		middleware03 -----> response.json()
			next()
		response.json()

	)
*/