import React from 'react'
import ReactPlayer from 'react-player';
import './Channels.css';
import SideNav from '../Sidenav';

const Page5 = () => {
  const videoURLs = [
    'https://www.youtube.com/watch?v=wzkxDag9CGQ',
    'https://www.youtube.com/shorts/OBJank9_PBE',
    'https://www.youtube.com/watch?v=NFqa1bKQEwc',
    'https://www.youtube.com/watch?v=7lu_Ws-lPLw',
    'https://www.youtube.com/watch?v=frM3EXsQO0E',
    'https://www.youtube.com/watch?v=r5GENV5AD4c'
    
  ];
  return (
    <div className="player-wrapper">
    <SideNav/>  <h2>Dexie Diaz Streaming</h2>
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

export default Page5;