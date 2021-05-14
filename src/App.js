import React from "react";
import react from "react";
import "./App.css";



// Whole App
class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="whole">
        <Header />

        <div id="drum-machine">
          <DrumDiv />

          <div id="tools">
            <Display />
            <Volume />
            <Toggles />
          </div>
        </div>
      </div>
    ); 
  }
}

// Header of App
const Header = () => {
  return (
    <div id="header">
      <h1>Drum Machine</h1>
      <a href="#">My Portfolio</a>
    </div>
  );
};

const DrumDiv = () => {
  return (
    <div id="drum">
      <div className="drum-pad" id="Q">Q</div>
      <div className="drum-pad" id="W">W</div>
      <div className="drum-pad" id="E">E</div>
      <div className="drum-pad" id="A">A</div>
      <div className="drum-pad" id="S">S</div>
      <div className="drum-pad" id="D">D</div>
      <div className="drum-pad" id="Z">Z</div>
      <div className="drum-pad" id="X">X</div>
      <div className="drum-pad" id="C">C</div>
    </div>
  );
};

const Display = () => {
  return (
    <div id="display">
      
    </div>
  );
};

const Volume = () => {
  return (
    <div id="volume">
      <input type="range" min="1" max="100" value="50" id="volume-range" />
    </div>
  );
};

const Toggles = () => {
  return(
    <div id="toggles">
      <button id="power-btn" class="onOff">Power</button>
      <button id="bank-btn" class="onOff">Bank</button>
    </div>
  );
}

export default App;