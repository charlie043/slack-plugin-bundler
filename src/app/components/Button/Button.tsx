const { React } = window;

export enum ButtonType {
  Normal = "normal",
  Success = "success",
  Danger = "danger"
}

interface IProps {
  label: string;
  type?: ButtonType;
  onClick?: (e: React.MouseEvent) => void;
}

const styleMap = {
  normal: { backgroundColor: "#cce5ff" },
  success: { backgroundColor: "#d4edda" },
  danger: { backgroundColor: "#f8d7da" }
};

const Button = (props: IProps) => {
  const { label, type = ButtonType.Normal, onClick } = props;

  const style = styleMap[type];
  return (
    <button
      style={Object.assign(
        {
          margin: "8px",
          padding: "12px",
          borderRadius: "24px"
        },
        style
      )}
      onClick={e => {
        onClick && onClick(e);
      }}
    >
      {label}
    </button>
  );
};

export default Button;
