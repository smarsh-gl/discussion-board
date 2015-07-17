declare var io: any;
declare var $: any;

class SocketController {
	socket:any
	constructor(options) {
		this.socket = io.connect('http://localhost:8000');
	}
	public onNew(fn) {
		this.socket.on('new', function(data) {
			fn(data);
		});
	}
	emit(name, data) {
		this.socket.emit(name, data);
	}
}