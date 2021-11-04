sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("test.controller.gridTest", {
			onInit: function () {
                    // var odata = this.getOwnerComponent().getModel();
                    // var oModel = new JSONModel(odata);    
                    // this.getView().setModel(oModel);
			}
		});
	});
