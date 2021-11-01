/*global QUnit*/

sap.ui.define([
	"padpad/controller/testPad.controller"
], function (Controller) {
	"use strict";

	QUnit.module("testPad Controller");

	QUnit.test("I should test the testPad controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
