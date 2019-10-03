import * as React from 'react';
import '../components/Game.css'

export interface GameProps {
    gameName: string;
    gameRank: number;
}

export class Game extends React.Component<GameProps, {}> {
    render() {
        return (
            <a className="game-container" onClick={this.loadGameInformation(this.props.gameName)}>
                <div className="game-rank">{this.props.gameRank}</div>
                <div className="game-text">{this.props.gameName}</div>
            </a>
        );
    }

    loadGameInformation(gameName: any): any {
        console.log("TODO: load game information for " + {gameName})
    }
}

export default Game;