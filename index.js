sap.ui.define([
	"sap/m/Text"

], function (Text) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content_1");

	
	function (Link) {
	"use strict";

	new Link({
		text: "Auf zu Google!"
		href: "www.google.de"
	}).placeAt("content_2");
		
});
