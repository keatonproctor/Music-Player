import React from 'react';
import './styles/app.scss';
import data from './data';

//Components
import Player from './components/Player';
import Song from './components/Song';

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
