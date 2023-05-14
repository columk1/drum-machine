import { useState } from 'react'
import './App.css'

function App() {

  const [display, setDisplay] = useState('༼ つ ◕_◕ ༽つ')

  const keys = [
    {
      keyName: "Q",
      id: "Kick",
      url: "kick.mp3"
    },
    {
      keyName: "W",
      id: "Semi-Kick",
      url: "semi-kick.mp3"
    },
    {
      keyName: "E",
      id: "Snare",
      url: "snare.mp3"
    },
    {
      keyName: "A",
      id: "Semi-Snare",
      url: "semi-snare.mp3"
    },
    {
      keyName: "S",
      id: "Open-HH",
      url: "open-hh.mp3"
    },
    {
      keyName: "D",
      id: "Closed-HH",
      url: "closed-hh.mp3"
    },
    {
      keyName: "Z",
      id: "Crash",
      url: "crash.mp3"
    },
    {
      keyName: "X",
      id: "Crash Snare",
      url: "crash-snare.mp3"
    },
    {
      keyName: "C",
      id: "Bass Stab",
      url: "bass-stab.mp3"
    }
  ];

  const playSound = (event) => {
    setDisplay(event.target.id);
    let audio = event.target.querySelector('audio');
    audio.currentTime = 0;
    audio.play();
  }
  
  document.addEventListener('keydown', (e) => {
    const audioClip = document.getElementById(e.key.toUpperCase());
    if(audioClip) {
      audioClip.play();
      setDisplay(audioClip.parentElement.id);
      audioClip.parentElement.classList.add("button-active");
    }
  })

  document.addEventListener('keyup', (e) => {
    const audioClip = document.getElementById(e.key.toUpperCase());
    if(audioClip) {
      audioClip.parentElement.classList.remove("button-active");
    }
  })

  return (
    <div className="wrapper">
      <div id="drum-machine">
        <div id="display">{display}</div>
        <div id="drum-pad-container">
          {keys.map((key) => (
            <button className="drum-pad" id={key.id} onClick={playSound}>
              <audio className="clip" id={key.keyName} src={key.url} />
              {key.keyName}
            </button>
          ))}
        </div>
      </div>
      <h1>Amen Break Drum Kit</h1>
    </div>
  )
}

export default App
