import { BiCaretRightCircle, BiCaretLeft, BiCaretRight, BiAdjust, BiArrowBack } from "react-icons/bi";
import { useRef, useEffect } from "react";

function Footer(props) {
    //props
    let {setPlaying, rangePos, setInputPos} = props !== undefined ? props : {undefined, undefined, undefined};
    //ref: <input> range
    let inputRef = useRef();

    //rangePos useEffect: update <input> range
    useEffect(() => {
        //update
        inputRef.current.value = rangePos;
    }, [rangePos])

    return <div id="footer">
        {/* Controls Container */}
        <div id="controls-container">
            {/* Dark/Light */}
            <a href="https://www.youtube.com/watch?v=j29N75wq6hM&list=PLK8AjScya4-uJSXUlQTUrLZeGUgXQM4SD">
                <button>
                    Album 5
                </button>
            </a>

            <div>
                {/* Left */}
                <BiCaretLeft
                    id="left"
                    onClick={() => {
                        //decrement input pos 10%
                        setInputPos(parseInt(inputRef.current.value) - 10);
                    }}
                />

                {/* Play */}
                <BiCaretRightCircle
                    id="play"
                    onClick={() => {
                        //update playing
                        setPlaying((playing) => {
                            return !playing;
                        });
                    }} 
                />

                {/* Right */}
                <BiCaretRight
                    id="right"
                    onClick={() => {
                        //increment input pos 10%
                        setInputPos(parseInt(inputRef.current.value) + 10);
                    }}
                />
            </div>

            {/* Back */}
            <a href="https://sewonkim0.github.io/SewonKim/">
                <BiArrowBack
                    id="back"
                />
            </a>
        </div>

        {/* Input */}
        <input
            ref={inputRef}
            type="range"
            defaultValue="0"

            //Input Change: Update input pos by user input
            onChange={() => {
                //update inputPos
                setInputPos(inputRef.current.value);
            }}
        ></input>
    </div>
}

export default Footer;