import * as React from 'react';
import '../components/Game.css';
import { GameData } from './GameData';

/*  
This is the "Game" Component! 

The Game class renders each found top Game (from the "TopGames" Component) using the render() function from this file! (RENDER METHOD SEEN ON LINE: 48)

*/

export interface GameProps {
    gameName: string;
    gameRank: number;
    gameImage: string;
    gameData:any;
}

export class Game extends React.Component<GameProps, { clicked: boolean }> {
    constructor(props: GameProps) {
        super(props);

        this.state = {
            clicked: false
        };

        this.toggleDialog = this.toggleDialog.bind(this);
    }

    toggleDialog(initialOpen: boolean) {
        /* 
            This method is called when the Game component as a whole is clicked! It is here to hide/show a piece of rendered code on the page!
            This piece of rendered code is a Game Data Dialog that will pop up when a Game component is clicked. Clicking the "EXIT" button will then hide the dialog.
            
            You can see this method being used on lines 57 and 63!
        */
        if(initialOpen) {
            this.setState({
                clicked: true
            });
        }
        else {
            this.setState({
                clicked: !this.state.clicked
            });
        }
    }

    render() {
        /* 
            This rendering method renders the Game component, as well as the Game Data Component that holds each game's data.

            On line 63, this is ternary syntax, which is a fancy shorthand version of an if-else statement! ---> { IF SOMETHING ? WHAT TO DO IF TRUE : WHAT TO DO IF FALSE }
                In our case, if the state of our Game component is clicked (or this.state.clicked == true), then we show some HTML and a <GameData /> component!
        */
        return (
            <div>
                <div className="game-container" onClick={ () => this.toggleDialog(true) }>
                    <img src={this.props.gameImage}/>
                    <div className="game-rank">{this.props.gameRank}</div>
                    <div className="game-text">{this.props.gameName}</div>
                </div>
                
                { this.state.clicked ? <div className="game-data-container"><div onClick={ () => this.toggleDialog(false) }>CLICK HERE TO EXIT</div><GameData gameName={this.props.gameName} /></div> : null }
            </div>
        );
    }
}

export default Game;