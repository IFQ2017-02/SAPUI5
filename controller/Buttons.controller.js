sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
 ], function (Controller, MessageBox) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.Buttons", {
       onShowShow : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sMsg = oBundle.getText("buttonMsgShow");
          // show message
          MessageBox.show(sMsg, {
              title: "Show"
          });
       },
       onShowAlert : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sMsg = oBundle.getText("buttonMsgAlert");
          // alert message
          MessageBox.alert(sMsg, {
              title: "Alert"
          });
       },
       onShowInformation : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sMsg = oBundle.getText("buttonMsgInformation");
          // information message
          MessageBox.information(sMsg, {
              title: "Information"
          });
       },
       onShowWarning : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sMsg = oBundle.getText("buttonMsgWarning");
          // warning message
          MessageBox.warning(sMsg, {
              title: "Warning"
          });
       },
       onShowError : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sMsg = oBundle.getText("buttonMsgError");
          // error message
          MessageBox.error(sMsg, {
              title: "Error"
          });
       },
       onShowConfirm : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sMsg = oBundle.getText("buttonMsgConfirm");
          // confirm message
          MessageBox.confirm(sMsg, {
              title: "Confirm"
          });
       },
       onShowSuccess : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sMsg = oBundle.getText("buttonMsgSuccess");
          // success message
          MessageBox.success(sMsg, {
              title: "Success"
          });
       },
    });
 });