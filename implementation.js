var { ExtensionCommon } = ChromeUtils.importESModule("resource://gre/modules/ExtensionCommon.sys.mjs");

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
