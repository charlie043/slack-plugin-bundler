import { IPlugin, PluginType } from "~context";

const { $ } = window;

const storeKey = "slack-plugin-bundler";
const styleWrapperId = "slack-plugin-bundler-style";
const scriptWrapperId = "slack-plugin-bundler-script";

const updateStyles = (plugins: IPlugin[]) => {
  const cssPlugins = plugins.filter(plugin => plugin.type === PluginType.Css);
  const styles = cssPlugins.map(plugin => {
    return `
/* ${plugin.name} */
${plugin.raw}
`;
  });
  const $wrapper = $(`#${styleWrapperId}`);
  if ($wrapper) {
    $wrapper.remove();
  }
  const s = $(
    `<div id='${styleWrapperId}'><style>${styles.join("\n")}</style></div>`
  );
  $("body").append(s);
};

const updateScript = (plugins: IPlugin[]) => {
  const scriptPlugins = plugins.filter(
    plugin => plugin.type === PluginType.Javascript
  );
  const styles = scriptPlugins.map(plugin => {
    return `
;(function() {
  /* ${plugin.name} */
  ${plugin.raw}
})();`;
  });
  const $wrapper = $(`#${scriptWrapperId}`);
  if ($wrapper) {
    $wrapper.remove();
  }
  const s = $(
    `<div id='${scriptWrapperId}'><script>${styles.join("\n")}</script></div>`
  );
  $("body").append(s);
};

const applyToSlack = (plugins: IPlugin[]) => {
  updateStyles(plugins);
  updateScript(plugins);
};

class Store {
  key: string;
  plugins: IPlugin[];
  constructor(key: string) {
    this.key = key;
    this.plugins = [];
    this.restore();
  }
  restore() {
    console.log("STOREGE:RESTORE");
    const str = localStorage.getItem(this.key) || "[]";
    try {
      this.plugins = JSON.parse(str);
    } catch (e) {
      console.error(e);
      this.clear();
      this.restore();
    }
  }
  save(plugins: IPlugin[]) {
    console.log("STOREGE:SAVE");
    this.plugins = plugins;
    localStorage.setItem(this.key, JSON.stringify(this.plugins));
    applyToSlack(this.plugins);
  }
  clear() {
    console.log("STOREGE:CLEAR");
    localStorage.removeItem(this.key);
  }
}

const store = new Store(storeKey);

export default store;
