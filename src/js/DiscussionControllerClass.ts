declare var $: any;
declare var compileTemplate: any;

class DiscussionController {
    constructor(socket)
    {
        $("#discussion_form").submit(function(e){
            e.preventDefault();
            
            var heading: string = $('#subject').val();
    		var body: string = $('#message').val();
            
            socket.emit('new', {heading: heading, body: body});
        });

    }
    newForm(data)
    {
        console.log('appending data');
         $('.js-main').append(compileTemplate({
    		heading: data.heading,
    		body: data.body,
	   }));
    }
}

