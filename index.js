sap.ui.define([
	"sap/m/Text",
	"sap/ui/core/HTML",
	"sap/m/Link"

], function (Text, HTML, Link) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");
	
	new HTML({
		content: "<br><br>"
	}).placeAt("content");

	new Link({
		text: "Auf zu Google!",
		href: "https://google.de/"
	}).placeAt("content");
		
});
