sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("padpad.controller.testPad", {
			onInit: function () {
                    // odata = this.getModel() ??
                    // console.log()
                    var odata = new JSONModel(this.getOwnerComponent().getModel());
                    console.log(odata);
                }   
		});
	});
