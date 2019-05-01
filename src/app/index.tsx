import Context, { IPlugin } from "~context";
import Lancher from "~components/Lancher";
import Content from "~components/Content";
import store from "~utils/store";
const { React, ReactDOM, $ } = window;
const { useState, useEffect } = React;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [plugins, setPlugins] = useState<IPlugin[]>(store.plugins);
  const [selectedPluginId, setSelectedPluginId] = useState<string>(
    (store.plugins[0] && store.plugins[0].id) || ""
  );

  useEffect(() => {
    store.save(plugins);
  }, [plugins]);

  return (
    <Context.Provider
      value={{
        state: {
          isOpen,
          plugins,
          selectedPluginId
        },
        actions: {
          toggle: () => setIsOpen(!isOpen),
          setPlugins: _plugins => setPlugins([..._plugins]),
          setSelectedPluginId: id => setSelectedPluginId(id)
        }
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2000
        }}
      >
        <Content />
        <Lancher />
      </div>
    </Context.Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("slack-customizer"));
