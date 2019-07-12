sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/m/MessageBox",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, MessageBox, JSONModel) {
   "use strict";
   return Controller.extend("hts.ifq2017-02.walkthrough.controller.App", {

      onInit: function () {
         var oData = {
            recipient : {
               name : "Welt"
            },
            schüler : {
               name: "Hugo",
               noten: [1,2,2,1]
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      },
      onStandardAlert: function () {
         alert("Dies ist eine Standard-Meldung");
      },
      onMessageToast: function () {
         MessageToast.show("Dies ist ein MessageToast");s
      },
      onMessageBox: function () {
         MessageBox.show("Dies ist eine SAPUI5-Meldung", {
            title: "Meldung"
         });
      },
      onInformation: function () {
         MessageBox.information("Dies ist eine SAPUI5-Information", {
            title: "Information"
         });
      },
      onAlert: function () {
         MessageBox.alert("Dies ist eine SAPUI5-Alert", {
            title: "Alert"
         });
      },
      onWarning: function () {
         MessageBox.warning("Dies ist eine SAPUI5-Warning", {
            title: "Warning"
         });
      },
      onError: function () {
         MessageBox.error("Dies ist eine SAPUI5-Error", {
            title: "Error"
         });
      },
      onConfirm: function () {
         MessageBox.confirm("Dies ist eine SAPUI5-Confirm", {
            title: "Confirm"
         });
      },
      onSuccess: function () {
         MessageBox.success("Dies ist eine SAPUI5-Success", {
            title: "Success"
         });
      }
   });
});