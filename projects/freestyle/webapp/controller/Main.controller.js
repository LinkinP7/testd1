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
                // var oModel = this.getOwnerComponent().getModel();
                //     sap.ui.getCore().setModel(oModel);    
            },
            
            onSelectionChange: function(oEvent) {
            var oSelectedItem = oEvent.getParameter("listItem");
            console.log(oSelectedItem.getBindingContext("bookservice").getObject("{title}","{price}"))
            var oModel = oSelectedItem.getBindingContext("bookservice").getObject("title");
            var oModel2 = oSelectedItem.getBindingContext("bookservice").getObject("price");
            var oModel3 = oSelectedItem.getBindingContext("bookservice").getObject("currency_code");  // 한번에 concat해서 불러오는 방법은 없을까? 
            alert(JSON.stringify(oModel + " is " + oModel2 + oModel3 + "."));
            }
		});
	});
