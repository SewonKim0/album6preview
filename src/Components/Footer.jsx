import { BiCaretRightCircle, BiCaretLeft, BiCaretRight, BiAdjust, BiArrowBack } from "react-icons/bi";

function Footer(props) {
    //props
    let {setPlaying, rangePos, setInputPos} = props !== undefined ? props : {undefined, undefined, undefined};

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
            <a href="https://sewonkim0.github.io/SewonKim/">
                <BiArrowBack
                    id="back"
                />
            </a>
        </div>

        {/* Input */}
        <input
            type="range"
            defaultValue="0"
            onChange={(event) => {
                //if undef, stop
                //update inputPos
            }}
        ></input>
    </div>
}

export default Footer;