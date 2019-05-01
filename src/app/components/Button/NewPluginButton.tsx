import Button from "./Button";
import Context from "~context";

import { createPlugin } from "~utils/plugins";
const { React } = window;
const { useContext } = React;

const NewPluginButton = () => {
  const context = useContext(Context);
  const onClick = () => {
    const plugin = createPlugin(context);
    const plugins = context.state.plugins;
    plugins.push(plugin);
    context.actions.setPlugins(plugins);
    context.actions.setSelectedPluginId(plugin.id);
  };
  return <Button label="+ Add New Plugin" onClick={onClick} />;
};

export default NewPluginButton;
