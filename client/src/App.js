import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import MainSlider from "./components/MainSlider/MainSlider";

function App() {
  return (
    <div className="App">
        <NavBar />
        <p>
          Hello
        </p>
        <MainSlider />
    </div>
  );
}

export default App;
