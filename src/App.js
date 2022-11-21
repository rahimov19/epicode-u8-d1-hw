import "./App.css";
import FirstComponent from "./components/FirstComponent.jsx";
import ButtonComponent from "./components/ButtonComponent.jsx";
import ClassComponent from "./components/ClassComponent.jsx";

function App() {
  let button2 = "Meow";

  return (
    <div className="App">
      <button
        onClick={function () {
          alert("meow");
        }}
      >
        {button2}
      </button>
      <FirstComponent content="CoronaCat" />
      <ButtonComponent
        bgcolor="black"
        button="Meow"
        margin="10px"
      ></ButtonComponent>
      <ClassComponent
        src="https://images.foxtv.com/static.fox2detroit.com/www.fox2detroit.com/content/uploads/2020/02/1280/720/Animals-Face-Mask-ASIAWIRE-4.jpg?ve=1&tl=1"
        alt="DUCK"
      ></ClassComponent>
    </div>
  );
}

export default App;
