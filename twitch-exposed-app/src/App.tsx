import * as React from 'react';
import './App.css';
import { TopGames } from './components/TopGames';
import bgImage from '../src/img/twitch_banner.png';

/* 

This App component is the main or "top-layer" of code that does the initial rendering of code on the page. 
The "<TopGames />"" piece of code you see renders in the code from the "render()" method seen in the 'TopGames.tsx' file!


Try adding another "<TopGames />" on line 23 to see another TopGames component get loaded in!

*/

const App: React.FC = () => {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300&display=swap" rel="stylesheet"></link>
	    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"></link>
      
      <div className="bg-styles"></div>
      <div>Twitch Exposed</div>
      <div className="top-games">
        <TopGames />
      </div>
    </div>
  );
}

export default App;