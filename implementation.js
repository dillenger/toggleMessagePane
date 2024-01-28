var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var Services = globalThis.Services || ChromeUtils.import("resource://gre/modules/Services.jsm");

var toggleMessagePaneApi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    return {
      toggleMessagePaneApi: {
        async toggleMessagePane() {
          Services.wm.getMostRecentWindow("mail:3pane").goDoCommand('cmd_toggleMessagePane');
        },
      },
    };
  }
};
