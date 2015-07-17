declare var require:any;


var Hapi: any = require('hapi');
var server: any = new Hapi.Server();
var port: number = 7777;

server.connection({
	port:port
});


server.route({
	method:'GET',
	path: '/',
	handler: function(request: any, reply: any) {
		reply.file('./../build/index.html');
	}
});

server.route({
	method:'GET',
	path: '/{name}',
	handler: function(request: any, reply: any) {
		reply.file('./../build/' + request.params.name);
	}
});

server.route({
	method:'GET',
	path: '/js/{name}',
	handler: function(request: any, reply: any) {
		reply.file('./../build/js/' + request.params.name);
	}
});

server.route({
	method: 'GET',
	path: '/css/{name}',
	handler: function(request: any, reply: any) {
		reply.file('./../build/css/' + request.params.name);
	}
});



server.start(function() {
	console.log("Hapi server started on port " + port);
});
