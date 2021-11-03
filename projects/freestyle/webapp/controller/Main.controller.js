sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/Filter',
    'sap/ui/model/json/JSONModel'
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Filter, JSONModel) {
		"use strict";

		return Controller.extend("freestyle.controller.Main", {
			onInit: function () {
                var oModel = this.getOwnerComponent().getModel();
                    sap.ui.getCore().setModel(oModel);    
            },
            
            onSelectionChange: function(oEvent) {
            var oSelectedItem = oEvent.getParameter("listItem");
            console.log(oSelectedItem.getBindingContext("bookservice").getObject())
            var oModel = oSelectedItem.getBindingContext("bookservice").getObject("title");
            alert(JSON.stringify(oModel));
            }
		});
	});
