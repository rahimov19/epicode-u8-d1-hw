const ButtonComponent = (props) => (
  <div
    className="footer"
    style={{ backgroundColor: props.bgcolor, marginBlock: props.margin }}
  >
    <button
      onClick={function () {
        alert("meow");
      }}
    >
      {props.button}{" "}
    </button>
  </div>
);
export default ButtonComponent;
