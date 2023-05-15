import Header from "./Components/Header";
import Display from "./Components/Display";
import Footer from "./Components/Footer";
import './App.css';
import { useState } from "react";

function App() {
  let [playing, setPlaying] = useState(false);
  let [position, setPosition] = useState(0);

  return (
    <div id="app">
      <Header />

      <Display 
        playing={playing} 
        position={position} 
      />

      <Footer 
        setPlaying={setPlaying} 
        setPosition={setPosition} 
      />
    </div>
  );
}

export default App;
