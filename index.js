sap.ui.define([
	"sap/m/Text"
	"sap/m/Link"

], function (Text, Link) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");

	new Link({
		text: "Auf zu Google!"
		href: "www.google.de"
	}).placeAt("content");
		
});
