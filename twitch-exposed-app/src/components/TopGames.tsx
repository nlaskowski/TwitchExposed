import * as React from 'react';
import { Game } from './Game';
import api from 'twitch-api-v5';
//import App from './App';

export interface TopGamesProps {

}

export class TopGames extends React.Component<TopGamesProps, { topGames: any[]}> {
    constructor(props: TopGamesProps) {
        super(props);

        this.state = {
            topGames: []
        }
    }

    componentDidMount() { 
    /* 
        This method is called RIGHT BEFORE the 'render()' method for this component is called
        Think of it like restocking a grocery store with food before it opens for business!

        Here, we query the Twitch API for the top 10 games, and store them within the component state in a variable called 'topGames'
    */
        
        api.clientID = 's80s9vkvxrsm4vr4y0hp0i0cqf3413';

        api.games.top({limit: 10}, (error, results) => {
            console.log(results);
            this.setState({topGames: results.top});
        });

        //queryTwitchAPI();
    }

    render() {
    /* 
        This method renders all of the top 10 <Game /> components we need! 

        By looping through the data we grabbed and stored in the componentDidMount() method, 
            we can build out unique <Game /> components based on their names, ranks, and other information available to us!
    */
        var games = [] as any[];

        this.state.topGames.forEach((game, index) => {
            games.push(<Game 
                gameName={game.game.name}
                gameRank={index + 1}
                gameImage={game.game.box.large}
            />)
        });

        return (
            <div className="top-games">{games}</div>
        );
    }
}

/*
    TRY USING THIS METHOD TO PRACTICE QUERYING THE TWITCH API!

    Just uncomment line 33 and your query results will be seen in your browsers console when you load in the application!
    (You can view your browser's console by pressing F12 while in the application window)
*/

function queryTwitchAPI(){
    api.clientID = 's80s9vkvxrsm4vr4y0hp0i0cqf3413';

    api.users.usersByName({ users: "schrolo" }, (err, res) => {
        console.log("Results of Twitch API Query!!!", res);
    });
}
