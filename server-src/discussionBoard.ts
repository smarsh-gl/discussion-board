declare var require:any;

var http = require('http'),
    faye = require('faye');

var server = http.createServer(),
    bayeux = new faye.NodeAdapter({mount: '/discussion', timeout: 45});

bayeux.attach(server);
server.listen(8000);

