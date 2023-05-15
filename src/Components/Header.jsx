import AlbumImage from "./../album6-1.jpg";

function Header() {
    return <div id="header">
        {/* Title Container */}
        <div id="title-container">
            <h2> Album 2: Winter Snow </h2>
            <p> By: Sewon Kim </p>
        </div>

        {/* Album Image */}
        <div id="image-container">
            <img
                src={AlbumImage}
                width="100%"
                height="auto"
                alt="Image of the album cover"
            />
        </div>
    </div>
}

export default Header;