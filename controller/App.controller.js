sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
   "use strict";
   return Controller.extend("hts.ifq2017-02.walkthrough.controller.App", {
      onAlert: function () {
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
      onError: function () {
         MessageBox.error("Dies ist eine SAPUI5-Fehlermeldung", {
            title: "Fehler"
         });
      }
   });
});