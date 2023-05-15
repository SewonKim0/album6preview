import Header from "./Components/Header";
import Display from "./Components/Display";
import Footer from "./Components/Footer";
import './App.css';
import { useState } from "react";

//Mobile Video
//video initial display

function App() {
  //whether video is playing (true) or paused (false)
  let [playing, setPlaying] = useState(false);
  //position of <input type=range> horizontal slider (0-100)
  //when playing, rangePos is constantly updated to video's current time
  let [rangePos, setRangePos] = useState(0);
  //updated on user input, changes both rangePos and video time
  let [inputPos, setInputPos] = useState(0);

  return (
    <div id="app">
      <Header />

      <Display 
        playing={playing} 
        setRangePos={setRangePos}
        inputPos={inputPos}
        setPlaying={setPlaying}
      />

      <Footer 
        setPlaying={setPlaying} 
        rangePos={rangePos}
        setInputPos={setInputPos}
      />
    </div>
  );
}

export default App;
