sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller) {
    "use strict";
    return Controller.extend("hts.ifq2017-02.walkthrough.controller.App", {
        onAlert: function () {
           alert("Dies ist eine Standard-Meldung");
        },
         onMessageToast: function () {
            MessageToast.show("Dies ist ein MessageToast");
      }
   });
 });