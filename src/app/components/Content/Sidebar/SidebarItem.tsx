import Context, { IPlugin } from "~context";
const { React } = window;
const { useContext } = React;

const normalStyle = {
  padding: "8px",
  backgroundColor: "#FFF",
  borderTop: "1px solid black",
  borderBottom: "1px solid black"
};

const activeStyle = {
  fontWeight: "bold",
  backgroundColor: "black",
  color: "white"
};

const SidebarItem = ({ plugin }: { plugin: IPlugin }) => {
  const context = useContext(Context);
  const isActive = context.state.selectedPluginId === plugin.id;
  return (
    <div
      style={Object.assign({}, normalStyle, isActive && activeStyle)}
      onClick={() => {
        context.actions.setSelectedPluginId(plugin.id);
      }}
    >
      {plugin.name}
    </div>
  );
};

export default SidebarItem;
