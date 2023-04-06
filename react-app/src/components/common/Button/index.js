import "./Button.css";

function Button(props) {
  return (
    <div>
      <button
        type={props.type}
        className="button"
        disabled={props.disabled}
        onClick={props?.onClick}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;
