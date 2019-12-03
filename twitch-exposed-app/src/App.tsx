import * as React from 'react';
import './App.css';
import { TopGames } from './components/TopGames';

const App: React.FC = () => {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300&display=swap" rel="stylesheet"></link>
	    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"></link>
      
      <div className="bg-styles">
        <div className="app-title">Twitch Exposed</div>
        <div className="app-subtitle">Your favorite games.. exposed.</div>
      </div>
      <div className="app-banner">
        <div>Refresh Data</div>
      </div>
      <div className="top-games">
        <TopGames />
      </div>
    </div>
  );
}

export default App;