import { IContext, IPlugin, PluginType } from "~context";
import maxBy from "lodash/maxBy";

const index = 1000000000;

export const getNewId = (context: IContext): string => {
  const plugins = context.state.plugins;
  if (!plugins.length) {
    return `${index}`;
  }
  const plugin = maxBy(plugins, p => parseInt(p.id, 10));
  const max = parseInt(plugin!.id, 10);
  return `${max + 1}`;
};

export const getPluginById = (
  context: IContext,
  id?: string
): IPlugin | null => {
  const plugins = context.state.plugins;
  return plugins.find(plugin => plugin.id === id) || null;
};

export const createPlugin = (context: IContext): IPlugin => {
  const id = getNewId(context);
  return { id, name: `Plugin ${id}`, type: PluginType.Css } as IPlugin;
};

export const updatePlugin = (context: IContext, plugin: IPlugin): void => {
  const { id, ...params } = plugin;
  const _plugin = getPluginById(context, id);
  Object.assign(_plugin, params);
  context.actions.setPlugins([...context.state.plugins]);
};

export const deletePlugin = (context: IContext, id: string): void => {
  const plugins = context.state.plugins.filter(p => p.id !== id);

  context.actions.setSelectedPluginId((plugins[0] && plugins[0].id) || null);
  context.actions.setPlugins([...plugins]);
};
