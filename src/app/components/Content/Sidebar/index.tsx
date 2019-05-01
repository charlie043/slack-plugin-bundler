import Context from "~context";
import NewPluginButton from "~components/Button/NewPluginButton";
import SidebarItem from "./SidebarItem";
const { React } = window;

const Sidebar = () => {
  return (
    <Context.Consumer>
      {context => (
        <div
          style={{
            width: "300px",
            height: "100%",
            border: "2px solid black"
          }}
        >
          <div
            style={{
              fontSize: "20px",
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              textAlign: "center"
            }}
          >
            Slack Customizer
          </div>
          <NewPluginButton />
          <div>
            {context.state.plugins.map(plugin => (
              <SidebarItem plugin={plugin} />
            ))}
          </div>
        </div>
      )}
    </Context.Consumer>
  );
};

export default Sidebar;
