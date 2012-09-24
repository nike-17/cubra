var querystring = require("querystring"),
fs = require("fs"),
url = require("url")


function start(response) {
	console.log("Request handler 'start' was called.");

	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" '+
	'content="text/html; charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<h1>Index</h1>' +
	'To add new BUzz use <a href="/add?buzzType=1&buzzId=123&someString=qqweqwe&someString2=asdasd">BuzzLInk</a>' + 
	'</body>'+
	'</html>';

	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	response.write(body);
	response.end();
}

function add(response, request, buzzStorage) {
	console.log("Request handler 'add' was called.");
	var result = '';
	try {
		var url_parts = url.parse(request.url, true);
		var query = url_parts.query;
		var buzzType = parseInt(query["buzzType"]);
		var buzzId = parseInt(query["buzzId"]);
		var someString = query["someString"];
		var someString2 = query["someString2"];
		
		buzzStorage.add(buzzType, buzzId, someString, someString2)
		result = JSON.stringify(buzzStorage.getByBuzzID(buzzId));
	} catch(e) {
		result = e;
	}
	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" '+
	'content="text/html; charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<h1>Addedd</h1>' + 
	result
	'</body>'+
	'</html>';

	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	response.write(body);
	response.end();
}


exports.start = start;
exports.add = add;