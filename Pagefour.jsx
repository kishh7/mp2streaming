import React from 'react'
import ReactPlayer from 'react-player';
import './Channels.css';
import SideNav from '../Sidenav';

const Pagefour = () => {
  const videoURLs = [
    'https://www.youtube.com/watch?v=6JYZ4Sru_C0',
    'https://www.youtube.com/watch?v=Cc3zYAnd5kw',
    'https://www.youtube.com/watch?v=KTosDIMEF24',
    'https://www.youtube.com/watch?v=4mpZMlWP3to',
    'https://www.youtube.com/watch?v=B87HO838M6s',
    'https://www.youtube.com/watch?v=Q1FBho8SBSk'
    
  ];
  return (
    <div className="player-wrapper">
     <SideNav/> <h2>Alodia Gosiengfiao</h2>
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

export default Pagefour;