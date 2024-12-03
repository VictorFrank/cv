import React from 'react';

const Spotify: React.FC = () => {

    return (
        <div>
            <h1>Playlists</h1>
            <iframe
                style={{borderRadius: '12px'}}
                src="https://open.spotify.com/embed/playlist/3oyTIwVCTtmI6x6YximNnC?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>

            <iframe
                style={{borderRadius: '12px'}}
                src="https://open.spotify.com/embed/playlist/5AVehkm4B3uWkNEGhHfLFX?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    );
}

export default Spotify;