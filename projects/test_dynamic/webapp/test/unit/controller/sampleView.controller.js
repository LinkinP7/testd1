/*global QUnit*/

sap.ui.define([
	"dynamic/test_dynamic/controller/sampleView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("sampleView Controller");

	QUnit.test("I should test the sampleView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
