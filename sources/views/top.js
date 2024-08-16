import { JetView, plugins } from "webix-jet";

export default class TopView extends JetView {
  config() {
    const navbar = {
      view: "toolbar",
      cols: [{ view: "button", value: "JSON to XLSX", width: 150 }, {}],
    };

    return {
      rows: [
        navbar,
        {
          template: "content",
        },
      ],
    };
  }
  init() {}
}
