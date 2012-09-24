var querystring = require("querystring"),
fs = require("fs"),
url = require("url");

function start(response, request, buzzStorage) {
	console.log("Request handler 'start' was called.");
	var body ='';
	
	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	try{
		var url_parts = url.parse(request.url, true);
		var buzzId = parseInt(url_parts.query["buzzId"]);
		var data  = buzzStorage.getByBuzzID(buzzId);
		console.log(data);
		body = JSON.stringify(data);
		if(undefined == body){
			body = 'No Data'
		}
		response.write(body);
	} catch (e){
		body = JSON.stringify({
			error: 'Please specefy buzzId ' + buzzId 

		});
		console.log(e);
		response.write(body);
		
	}

	

	response.end();
}





exports.start = start;
