const zoid = require("zoid/dist/zoid.frame.min");

export const LeadDesk = {
  api() {
    if (!window.xprops || !window.xprops.leaddesk) {
      const tag = new URLSearchParams(document.location.search).get("_leadapp");
      if (!tag) {
        console.warn(
          "LeadApp integration was not started due to missing _leadapp tag in URL"
        );
        return null;
      }
      zoid.create({
        tag,
        allowedParentDomains: [
          /^http(s)?:\/\/[\-\w]*\.leaddesk\.(com|ch|eu)$/,
          /^http(s)?:\/\/localhost$/, // allow localhost for development purposes
        ],
      });
    }
    if (window.xprops && window.xprops.leaddesk) {
      return window.xprops.leaddesk;
    }
    console.warn("LeadApp initialization failed");
    return null;
  },
};
