sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 */



function (Controller, UIComponent) {
    "use strict";
 
    return Controller.extend("northwindnew.view.Detail", {
        onInit: function () {
            // var oRouter = UIComponent.getRouterFor(this);
            // oRouter.getRoute("RouteDetail").attachPatternMatched(this._ondetails, this);
        }
 
        // _ondetails: function (oEvent) {
        //     this.getView().bindElement({
        //         path: "/" + oEvent.getParameter("arguments").detail.replace("@", "/"),
        //         model: "myjson"
        //     });
        // },
    });
});