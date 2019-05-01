import store from "~utils/store";
const { React } = window;

export enum PluginType {
  Javascript = "javascript",
  Css = "css"
}

export interface IPlugin {
  id: string;
  type: PluginType;
  name?: string;
  url?: string;
  raw?: string;
}

export interface IContext {
  state: {
    isOpen: boolean;
    plugins: IPlugin[];
    selectedPluginId: string;
  };
  actions: { [key in string]: (any) => void };
}

const Context = React.createContext<IContext>({
  state: { plugins: store.plugins }
} as IContext);

export default Context;
