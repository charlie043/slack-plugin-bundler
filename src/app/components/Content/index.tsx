import Context from "~context";
import Sidebar from "./Sidebar";
import Main from "./Main";
const { React } = window;
const { useContext } = React;

const Content = function() {
  const context = useContext(Context);
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "white",
        display: context.state.isOpen ? "flex" : "none"
      }}
    >
      <Sidebar />
      <Main />
      <div
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "black",
          position: "absolute",
          top: 0,
          left: 0
        }}
      />
      <div
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          right: 0,
          top: 0,
          background: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "24px"
        }}
        onClick={context.actions.toggle}
      >
        ×
      </div>
    </div>
  );
};

export default Content;
