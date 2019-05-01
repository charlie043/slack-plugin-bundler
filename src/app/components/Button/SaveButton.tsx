import Button, { ButtonType } from "./Button";
import Context, { IPlugin } from "~context";

import { updatePlugin } from "~utils/plugins";
const { React } = window;
const { useContext } = React;

interface IProps {
  plugin: IPlugin;
}
const SaveButton = ({ plugin }: IProps) => {
  const context = useContext(Context);
  const onClick = () => {
    updatePlugin(context, plugin);
  };
  return <Button type={ButtonType.Success} label="Save" onClick={onClick} />;
};

export default SaveButton;
