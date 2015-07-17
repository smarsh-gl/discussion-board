declare var Handlebars: any;
declare var $: any;

(function() {
	"use strict"
	
	let template: string = "<div class=\"panel panel-default .js-post-template\"><div class=\"panel-heading\">\{{heading}}</div><div class=\"panel-body\">{{body}}</div></div>";
	let compileTemplate: Function = Handlebars.compile(template);

	$('.js-main').append(compileTemplate({
		heading: 'Heading',
		body: 'Body'
	}));




})();