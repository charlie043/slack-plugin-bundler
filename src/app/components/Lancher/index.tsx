import Context from "~context";
const { React } = window;
const { useContext } = React;

const Lancher = function() {
  const context = useContext(Context);
  return (
    <div
      style={{
        position: "fixed",
        bottom: "-2px",
        left: "-2px",
        width: "24px",
        height: "24px",
        background: "#FFF",
        color: "#777",
        border: "2px solid #DDD",
        borderRadius: "0 100% 0 0"
      }}
      onClick={context.actions.toggle}
    />
  );
};

export default Lancher;
