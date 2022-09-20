import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@techscene/mainpage",
  app: () => System.import("@techscene/mainpage"),
  activeWhen: ["/mainpage"],
});

registerApplication({
  name: "@techscene/dashboard",
  app: () => System.import("@techscene/dashboard"),
  activeWhen: ["/dashboard"],
});

start({
  urlRerouteOnly: true,
});
