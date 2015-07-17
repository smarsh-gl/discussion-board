declare var $: any;

class App{
	start() {
		var socket = new SocketController({});
		var DC = new DiscussionController(socket);
		
		socket.onNew(function(data) {
			DC.newForm(data);
		});
	}
}