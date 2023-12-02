import React from 'react';
import ReactPlayer from 'react-player';
import './Videoplayer.css';

const VideoPlayer = () => {
  const videoURLs = [
    'https://www.youtube.com/watch?v=8sn1mQbkaM8',
    'https://www.youtube.com/watch?v=7n70YIRtxDw',
    'https://www.youtube.com/watch?v=I3vH6Mc1zI0',
    'https://www.youtube.com/watch?v=jtjXRsH555w',
    'https://www.youtube.com/watch?v=cdKOS2e3FL4',
    'https://www.youtube.com/watch?v=hfFQDABPIak',
    'https://www.youtube.com/watch?v=OSaQOshn8IA',
    'https://www.youtube.com/watch?v=RG362gNgniQ',
    'https://www.youtube.com/watch?v=Niv_TPZPIds&t=2s',
    'https://www.youtube.com/watch?v=NFqa1bKQEwc',
    'https://www.youtube.com/watch?v=I4n3mbeEUqw',
    'https://www.youtube.com/watch?v=9b6sSCj_j-w',
    'https://www.youtube.com/watch?v=BQJJnAF_ftI',
    'https://www.youtube.com/watch?v=vvDu9k6JPQE',
    'https://www.youtube.com/watch?v=T1aqpjx4uM8',
    'https://www.youtube.com/watch?v=Cc3zYAnd5kw',

  ];

  return (
    
    <div className="player-wrapper">
      {videoURLs.map((url, index) => (
        <ReactPlayer
          key={index}
          className="react-player"
          url={url}
          controls={true}

        />
      ))}
    </div>
  );
};

export default VideoPlayer;
