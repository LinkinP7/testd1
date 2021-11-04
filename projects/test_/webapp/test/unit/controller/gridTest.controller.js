/*global QUnit*/

sap.ui.define([
	"test_/controller/gridTest.controller"
], function (Controller) {
	"use strict";

	QUnit.module("gridTest Controller");

	QUnit.test("I should test the gridTest controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
