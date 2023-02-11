import React from "react";
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';

// import FileVideo from './video/ik-video.mp4';

export default function VideoSection(){
    return(
        <div>
            <Video autoPlay loop>
                <source src={FileVideo} type="video/webm" />
            </Video>
        </div>
    )
}