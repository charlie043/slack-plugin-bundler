import Button, { ButtonType } from "./Button";
import Context from "~context";
import { deletePlugin } from "~utils/plugins";

const { React } = window;
const { useContext } = React;

const NewPluginButton = () => {
  const context = useContext(Context);
  return (
    <Button
      type={ButtonType.Danger}
      label="Delete"
      onClick={() => {
        deletePlugin(context, context.state.selectedPluginId);
      }}
    />
  );
};

export default NewPluginButton;
