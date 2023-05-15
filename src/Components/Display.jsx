import MainVideo from "./../winter-snow-optimized.mp4";
import { useEffect, useRef } from "react";

function Display(props) {
    //props
    let {playing, setRangePos, inputPos, setPlaying} = props !== undefined ? props : {undefined, undefined, undefined};
    //refs
    let videoRef = useRef();

    //playing useEffect: play/pause
    useEffect(() => {
        //update video state
        if (playing === false) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    }, [playing]);

    //inputPos useEffect: update video time
    useEffect(() => {
        //if video duration is NaN: stop
        if (isNaN(videoRef.current.duration)) {
            return;
        }
        //calculate video time
        let videoTime = (inputPos * 0.01) * videoRef.current.duration;
        //update video time
        videoRef.current.currentTime = videoTime;
    }, [inputPos])

    return <div id="display">
        <video
            ref={videoRef}

            //Time Update: Update range pos with vid pos
            onTimeUpdate={() => {
                //calculate rangePos
                let newRangePos = videoRef.current.currentTime / videoRef.current.duration;
                newRangePos *= 100;
                //update rangePos
                setRangePos(newRangePos);
            }}

            //Video Ended: Set playing to false
            onEnded={() => {
                //update playing
                setPlaying(false);
            }}>
            <source src={MainVideo} type="video/mp4" />
            Error: Cannot load video.
        </video>
    </div>
}

export default Display;