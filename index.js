sap.ui.define([
	"sap/m/Text",
	"sap/ui/core/HTML",
	"sap/m/Link",
	"sap/ui/core/mvc/XMLView"

], function (Text, HTML, Link, XMLView) {
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
	
	new HTML({
		content: "<br><br>"
	}).placeAt("content");

	XMLView.create({
		viewName: "hts.ifq2017-02.walkthrough.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
	
});
