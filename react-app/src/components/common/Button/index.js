import "./Button.css";

function Button(props) {
  return (
    <div>
      <button type="submit" className="button" disabled={props.disabled}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
