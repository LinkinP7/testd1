sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/ui/core/routing/History"
], 

    function (Controller, History) {
	"use strict";

	return Controller.extend("freestyle.controller.sub1", {
		onInit : function () {
			// var sUrl = "#" + this.getOwnerComponent().getRouter().getURL("page1");
            // this.byId("link").setHref(sUrl);
            // this.getOwnerComponent().getRouter().getRoute("sub1");
		},

		onToPage1 : function () {
                    this.getOwnerComponent().getRouter().navTo("main"); 
		},

		onBack : function () {
			var sPreviousHash = History.getInstance().getPreviousHash();

			//The history contains a previous entry
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getOwnerComponent().getRouter().navTo("main", null, true);
			}
		}
	});

});
