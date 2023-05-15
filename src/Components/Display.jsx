import MainVideo from "./../winter-snow.mp4";
import { useEffect, useRef } from "react";

function Display(props) {
    //props
    let {playing, setRangePos, inputPos} = props !== undefined ? props : {undefined, undefined, undefined};
    //refs
    let videoRef = useRef();

    //useEffect: playing
    useEffect(() => {
        //if undef, stop
        if (playing === undefined) {
            return;
        }
        //update video state
        if (playing === false) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    }, [playing]);

    return <div id="display">
        <video
            ref={videoRef}>
            <source src={MainVideo} type="video/mp4" />
            Error: Cannot load video.
        </video>
    </div>
}

export default Display;