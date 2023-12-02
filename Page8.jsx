import React from 'react'
import ReactPlayer from 'react-player';
import './Channels.css';
import SideNav from '../Sidenav';

function Page8() {
  const videoURLs = [
    'https://www.youtube.com/watch?v=upIC1Vfze2Y',
    'https://www.youtube.com/watch?v=98yRxmvvx8I',
    'https://www.youtube.com/watch?v=BQJJnAF_ftI',
    'https://www.youtube.com/watch?v=nr2Bpelbxkw',
    'https://www.youtube.com/watch?v=hfSwZEsZKLM',
    'https://www.youtube.com/watch?v=WUZ4n1kkA8o',
    
  ];
  return (
    <div className="player-wrapper">
      <SideNav/><h2>Yawi Streaming</h2>
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

export default Page8;