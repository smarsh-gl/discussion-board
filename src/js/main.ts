declare var Handlebars: any;
declare var $: any;
declare var io: any;

(function() {
	"use strict"
	
	let template: string = "<div class=\"panel panel-default .js-post-template\"><div class=\"panel-heading\">\{{heading}}</div><div class=\"panel-body\">{{body}}</div></div>";
	let compileTemplate: Function = Handlebars.compile(template);
    
	window['compileTemplate'] = compileTemplate;
	
	$(function() {
		var app = new App();
		app.start();
	});
})();

