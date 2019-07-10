sap.ui.define([
	"sap/m/Text",
	"sap/m/Link"

], function (Text, Link) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");

	new Link({
		href:"https://google.de/"
		text:"Auf zu Google!"
	}).placeAt("content");
		
});
