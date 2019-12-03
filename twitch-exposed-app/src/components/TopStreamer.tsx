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
                    <span>{ this.props.streamerIndex }. { this.props.streamerCount }</span>
                    <a href={ this.props.streamerUrl } target="_blank" >{ this.props.streamerDisplayName }</a>
                    
                    <ReactPlayer 
                        url={ this.props.streamerUrl } 
                        playing 
                        width="auto"
                        height="90%"
                        allowfullscreen="false"
                        muted
                    />

                    
                </div>
            );
        }
        else {
            return(
                <div>
                    <span>{ this.props.streamerIndex }. { this.props.streamerCount }</span>
                    <a href={ this.props.streamerUrl } target="_blank" >{ this.props.streamerDisplayName }</a>
                </div>
            );
        }
        
    }
}

export default TopStreamer;