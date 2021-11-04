sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/Filter',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast',
    "sap/ui/core/routing/History"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Filter, JSONModel, MessageToast, History) {
		"use strict";
        var array = [];
        var set2 = new Set();
        var result = "Result: \n";
		return Controller.extend("freestyle.controller.Main", {
			onInit: function () {
                // var oModel = this.getOwnerComponent().getModel();
                //     sap.ui.getCore().setModel(oModel);
                // var sUrl = "#" + this.getOwnerComponent().getRouter().getURL("page2");
                // this.byId("link").setHref(sUrl);    
                // this.getOwnerComponent().getRouter().getRoute("main");
            },
            
            onSelectionChange: function(oEvent) {
                var oSelectedItem = oEvent.getParameter("listItem");
                // console.log(oSelectedItem.getBindingContext("bookservice").getObject("{title}","{price}"))
                var oModel = oSelectedItem.getBindingContext("bookservice").getObject("title");
                var oModel2 = oSelectedItem.getBindingContext("bookservice").getObject("price");
                var oModel3 = oSelectedItem.getBindingContext("bookservice").getObject("currency_code");  // 한번에 concat해서 불러오는 방법은 없을까? 
                // alert(JSON.stringify(oModel + " is " + oModel2 + oModel3 + "."));
                var oTest = oModel + " is " + oModel2 + oModel3 + ".";
                // alert(JSON.stringify(oTest));  // stringify 하면 " " 안에 들어감
                // alert(oTest);
                
                array.push(oTest);

                if (set2.has(oModel)){ set2.delete(oModel); } else { set2.add(oModel); }
                
                console.log(set2.size)
                console.log(set2)
             },

            onPress1: function (oEvent) {
                if (oEvent.getSource().getPressed()) {
                    MessageToast.show(set2.size + " items selected");  // 전체선택을 고려 못함;; 전체선택까지 포함하려면 set size보단 체크된 속성을 지닌 row 수 count ???
                }
                // else { MessageToast.show(oEvent.getSource().getId() + " Unpressed"); }
            }, 

            onPressNextPage: function (oEvent) {
                // if (oEvent.getSource().getPressed()) {
                    this.getOwnerComponent().getRouter().navTo("sub1"); 
                // }              
            }             
            

            // onDisplay: function(oEvent) {
            //     for (var i = 0; i < array.length; i++) {
            //         alert(array[i]);
            //     }
            // }
		});
	});
