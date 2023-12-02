import React from 'react'
import ReactPlayer from 'react-player';
import './Channels.css';
import SideNav from '../Sidenav';

const Page9 = () => {
  const videoURLs = [
    'https://www.youtube.com/watch?v=-i-KvtpEPzA',
    'https://www.youtube.com/watch?v=vvDu9k6JPQE',
    'https://www.youtube.com/watch?v=oOTd5iRhFGU',
    'https://www.youtube.com/watch?v=b_0pjQVQogs',
    'https://www.youtube.com/watch?v=MQTDVeZKuKk',
    'https://www.youtube.com/watch?v=cHk6XSM-JNc',
    
  ];
  return (
    <div className="player-wrapper">
     <SideNav/> <h2>H2wo Streaming</h2>
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

export default Page9;