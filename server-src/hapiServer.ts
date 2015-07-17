declare var require:any;


var hapi = require('hapi');


var server: any = new hapi.Server();


server.connection({
	port:7777
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
	method:'GET',
	path: '/css/{name}',
	handler: function(request: any, reply: any) {
		reply.file('./../build/css/' + request.params.name);
	}
});



server.start(function() {
	console.log("Hapi server started on port 7777");
});
