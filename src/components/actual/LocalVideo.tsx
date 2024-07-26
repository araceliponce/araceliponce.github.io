import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';


/* 
https://www.npmjs.com/package/react-player
 */

interface LocalVideoPlayerProps {
  videoUrl: string
}

const LocalVideoPlayer: React.FC<LocalVideoPlayerProps> = ({ videoUrl }) => {

  const [isClient, setIsClient] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // retorna null durante la renderizacion
  }


  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };


  return (
    <div style={{ maxWidth: 'var(--max-w-video)', marginInline: 'auto', borderRadius: '.3rem', overflow: 'hidden' }}>
      <div
        className="carousel-ratio-wrapper video-wrapper"
        onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      >
        <ReactPlayer
          url={videoUrl}
          playing={isPlaying}
          loop
          muted
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default LocalVideoPlayer;
