import * as React from 'react';
import '../components/GameData.css';
import api from 'twitch-api-v5';

export interface GameDataProps{
    gameName: string;
    viewerCount: number;
    //TODO: "gamePercent" holds (viewer count / total viewer count of game)
}
export class GameData extends React.Component <GameDataProps, { streamData: any[] }> {
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
            streamData:results.streams //BUG FIXED! Needed "results.streams" so rendering loop will actually work (lol)
        })
    });
   }

    render() {        
        return (
            <div>
                <div>{this.props.gameName}</div>
                
                <div>Total Viewer Count: {this.props.viewerCount}</div>

                <div>Top 10 streams by Viewer Count: </div>
                { this.state.streamData
                    .sort((stream1, stream2) => (stream2.viewers > stream1.viewers) ? 1 : -1)
                    .slice(0, 10)
                    .map( (stream, index) => <div>{ index + 1 }   <span>{ stream.viewers }</span>   <span>{ stream.channel.display_name }</span></div>)
                }
                <div>Top 10 streams by Follower Count: </div>
                {
                    this.state.streamData
                    .sort((stream1, stream2) => (stream2.viewers > stream1.channel.followers) ? 1 : -1)
                    .slice(0, 10)
                    .map( (stream, index) => <div>{ index + 1 }   <span>{ stream.channel.followers }</span>   <span>{ stream.channel.display_name }</span></div>)
                }
            </div>)
    }
}
