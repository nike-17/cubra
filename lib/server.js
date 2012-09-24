var http = require("http"),
	url = require("url");

function start(route, handle, config, buzzStorage) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request, buzzStorage);
	}

	http.createServer(onRequest).listen(config.port, config.host);
	console.log("Server has started.");
}

exports.start = start;