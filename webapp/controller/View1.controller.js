sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],

  /**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */

  function (Controller, UIComponent) {
    "use strict";
 
    return Controller.extend("northwindnew.controller.View1", {
        onInit: function () {
            // var jsonModel = new sap.ui.model.json.JSONModel(); // Uncomment if initializing a new JSON Model
            // this.getView().setModel(jsonModel, "myjson"); // Uncomment if the model needs to be set to the view directly
            var jsonModel = this.getOwnerComponent().getModel("myjson");

            var northwindOdata = this.getOwnerComponent().getModel();

            northwindOdata.read("/Products", {
                success: function (data) {
                    jsonModel.setData({
                        myProducts: data.results
                    });
                },
                error: function () { }
            });
        },
        onPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = UIComponent.getRouterFor(this);
            //var itemClicked = oItem.getBindingContext("myProducts").getPath().substr(1);
           var itemClicked = oItem.getBindingContextPath().substr(1);
            itemClicked = itemClicked.replace("/", "@");
                oRouter.navTo("RouteDetail",{
                    holder : itemClicked
                });

                // var oRouter = this.getRouter();
                // var selectedItem;
            },
            onButton1: function (oEvent) {
                var oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteNavigate");
                }, 
                onButton2: function (oEvent) {
                    var oRouter = UIComponent.getRouterFor(this);
                        oRouter.navTo("RouteDetail");
                    },   
    });
});
