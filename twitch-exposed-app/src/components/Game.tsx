import * as React from 'react';
import '../components/Game.css';

export interface GameProps {
    gameName: string;
    gameRank: number;
    gameImage: string;
}

export class Game extends React.Component<GameProps, {}> {
    render() {
        return (
            <a className="game-container">
                <img src={this.props.gameImage}/>
                <div className="game-rank">{this.props.gameRank}</div>
                <div className="game-text">{this.props.gameName}</div>
            </a>
        );
    }
}

export default Game;