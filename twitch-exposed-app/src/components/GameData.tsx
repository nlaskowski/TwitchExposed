import * as React from 'react';
import '../components/GameData.css';
import api from 'twitch-api-v5';
import { any } from 'prop-types';

export interface GameDataProps{
    gameName:string;
}
export class GameData extends React.Component <GameDataProps, {streamData: any[]}> {
    constructor(props: GameDataProps) {
        super(props);

        this.state = {
            streamData: []
        }
    }
    /* 
        This is the render method that is called when we want to create a <GameData /> component on the page!

        This GameData component will house data about its respective Game component!
    */
   componentDidMount(){
    api.clientID = 's80s9vkvxrsm4vr4y0hp0i0cqf3413';

    api.streams.live({game: "League of Legends"}, (error, results) => {
        console.log(results);
        this.setState({
            streamData:results
        })
    });
   }
    render() {
        var streamArray=[] as any[];
        this.state.streamData.forEach((stream) => {
            streamArray.push(stream.channel.followers);
        });

        return (
            <div>
                <div>{this.props.gameName}</div>
                <div>Heres some words and such!</div>
                <div>THIS IS WHERE NOAH IS GONNA PUT ALL OF HIS QUERY INFORMATION! WOO!</div>
            </div>)
    }
}
