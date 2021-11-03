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

                    var odata = this.getOwnerComponent().getModel();

                    var oModel = new JSONModel(odata);    
                    console.log(odata);

                    this.getView().setModel(oModel); // 바인딩
                    
                }   
		});
	});
