import MainVideo from "./../winter-snow.mp4";

function Display() {
    return <div id="display">
        <video controls>
            <source src={MainVideo} type="video/mp4" />
            Error: Cannot load video.
        </video>
    </div>
}

export default Display;