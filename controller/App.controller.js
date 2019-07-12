sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/m/MessageBox",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, MessageBox, JSONModel, ResourceModel) {
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
         var i18nModel = new ResourceModel({
            bundleName: "hts.ifq2017-02.walkthrough.i18n.i18n"
         });
         this.getView().setModel(i18nModel, "i18n");
      },
      // read msg from i18n model
      var oBundle = this.getView().getModel("i18n").getResourceBundle();
      var sRecipient = this.getView().getModel().getProperty("/recipient/name");
      var sMsg = oBundle.getText("helloMsg", [sRecipient]);
      // show message
      MessageToast.show(sMsg);
      },
      onStandardAlert: function () {
         alert("Dies ist eine Standard-Meldung");
      },
      onMessageToast: function () {
         MessageToast.show("Dies ist ein MessageToast");
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