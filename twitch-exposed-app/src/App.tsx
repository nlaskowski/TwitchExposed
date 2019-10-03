import * as React from 'react';
import './App.css';

import { Game } from './components/Game'

const App: React.FC = () => {

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300&display=swap" rel="stylesheet"></link>

      <div className="top-games">
      { getGames }
      <Game gameName="Fornite" gameRank={1}/>
      <Game gameName="Minecraft" gameRank={2}/>
      <Game gameName="Apex Legends" gameRank={3}/>
      <Game gameName="World of Warcraft" gameRank={4}/>
      <Game gameName="Overwatch" gameRank={5}/>
      <Game gameName="Borderlands" gameRank={1}/>
      <Game gameName="League of Legends" gameRank={2}/>
      <Game gameName="Monster Hunter World" gameRank={3}/>
      <Game gameName="NHL 2020" gameRank={4}/>
      <Game gameName="Game Name 10" gameRank={5}/>
    </div>
    </div>
  );
}

export default App;

function getGames() {
  //TODO: query Twitch API, grab top 10 games, display
}