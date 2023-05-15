import { BiCaretRightCircle, BiCaretLeft, BiCaretRight, BiAdjust, BiArrowBack } from "react-icons/bi";

function Footer(props) {
    //props
    let {setPlaying, setPosition} = props !== undefined ? props : {undefined, undefined};

    return <div id="footer">
        {/* Controls Container */}
        <div id="controls-container">
            {/* Dark/Light */}
            <BiAdjust
                id="dark-light"
            />

            <div>
                {/* Left */}
                <BiCaretLeft
                    id="left"
                />

                {/* Play */}
                <BiCaretRightCircle
                    id="play"
                    onClick={() => {
                        //if undef: stop
                        if (setPlaying === undefined) {
                            return;
                        }
                        //update playing
                        setPlaying((playing) => {
                            return !playing;
                        });
                    }} 
                />

                {/* Right */}
                <BiCaretRight
                    id="right"
                />
            </div>

            {/* Back */}
            <BiArrowBack
                id="option"
            />
        </div>

        {/* Input */}
        <input
            type="range"
            defaultValue="0"
            onChange={(event) => {
                //if undef, stop
                if (setPosition === undefined) {
                    return;
                }
                //update position
                setPosition(event.target.value);
            }}
        ></input>
    </div>
}

export default Footer;