var loader = require('./lib/config-loader.js').loader,
serviceConfig = loader.load('./config/service.json'),
frontConfig = loader.load('./config/front.json'),
server = require("./lib/server"),
router = require("./lib/route"),
serviceRequestHandlers = require("./lib/protocol/service/requestHandlers"),
frontRequestHandlers = require("./lib/protocol/front/requestHandlers"),
buzzStorage = require('./lib/storage/buzz').buzz;

var serviceHandle = {}
serviceHandle["/"] = serviceRequestHandlers.start;
serviceHandle["/add"] = serviceRequestHandlers.add;
server.start(router.route, serviceHandle, serviceConfig, buzzStorage);


var frontHandle = {}
frontHandle["/"] = frontRequestHandlers.start;

server.start(router.route, frontHandle, frontConfig, buzzStorage);