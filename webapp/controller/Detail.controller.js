sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 */



function (Controller, UIComponent) {
    "use strict";
 
    return Controller.extend("northwindnew.controller.Detail", {
        onInit: function () {
             var oRouter = UIComponent.getRouterFor(this);
             oRouter.getRoute("RouteDetail").attachPatternMatched(this._onHolder, this);
        },
 
         _onHolder: function (oEvent) {  //any convention a private function we use underscore
             this.getView().bindElement({
                 path: "/" + oEvent.getParameter("arguments").holder.replace("@", "/"),
                 model: "myjson"
             });
         },
    });
});