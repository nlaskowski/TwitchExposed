import * as React from 'react';
import ReactPlayer from 'react-player';

export interface TopStreamerProps {
    streamerIndex: number;
    streamerCount: number; //the count of viewers or followers
    streamerDisplayName: string;
    streamerUrl: string;
}

export class TopStreamer extends React.Component<TopStreamerProps, { }> {
    render() {
        if(this.props.streamerIndex == 1){
            return(
                <div className="top-streamer">
                    { this.props.streamerIndex }.

                    <ReactPlayer 
                        url={ this.props.streamerUrl } 
                        playing 
                        width="640px"
                        height="320px"
                        allowfullscreen="false"
                        muted
                    />

                    <span>{ this.props.streamerCount }</span>
                    <a href={ this.props.streamerUrl } target="_blank" >{ this.props.streamerDisplayName }</a>
                </div>
            );
        }
        else {
            return(
                <div>
                    { this.props.streamerIndex }.
                    <span>{ this.props.streamerCount }</span>
                    <a href={ this.props.streamerUrl } target="_blank" >{ this.props.streamerDisplayName }</a>
                </div>
            );
        }
        
    }
}

export default TopStreamer;