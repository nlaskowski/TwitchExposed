import * as React from 'react';
import '../components/Game.css';
import { GameData } from './GameData';

/*  
This is the "Game" Component! 

The Game class renders each found top Game (from the "TopGames" Component) using the render() function from this file! (RENDER METHOD SEEN ON LINE: 48)

*/

export interface GameProps {
    gameRank: number;
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
       console.log(this.props.gameData);
        return (
            <div>
                <div className="game-container" onClick={ () => this.toggleDialog(true) }>
                    <img className="game-img" src={this.props.gameData.game.box.large} />
                    <div className="game-rank">{this.props.gameRank}</div>
                    <span className="game-text">{this.props.gameData.game.name}</span>
                    <span className="game-viewers">{this.props.gameData.viewers} viewers</span>
                </div>
                
                { this.state.clicked ? (<div className="game-data-container">
                                            <GameData gameName={this.props.gameData.game.name} viewerCount={this.props.gameData.viewers} />
                                            <div className="game-data-exit" onClick={ () => this.toggleDialog(false) }>X</div>
                                        </div>) : null }
            </div>
        );
    }
}

export default Game;