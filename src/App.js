import './App.css';

function App() {
  return (
    <div className="App">
      <video controls width="640" height="360">
        <source src="winter-snow.mp4" type="video/mp4" />
        Error: Cannot load video.
      </video>
    </div>
  );
}

export default App;
