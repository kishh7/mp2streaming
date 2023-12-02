import React from 'react'
import ReactPlayer from 'react-player';
import './Channels.css';
import SideNav from '../Sidenav';

const Page7 = () => {
  const videoURLs = [
    'https://www.youtube.com/watch?v=n0Hh79sk47w',
    'https://www.youtube.com/watch?v=FN_Sy3L1Clg',
    'https://www.youtube.com/watch?v=24quZTLoAfg',
    'https://www.youtube.com/watch?v=M544cK8d5YE',
    'https://www.youtube.com/watch?v=zL5LiuwCcK0',
    'https://www.youtube.com/watch?v=9b6sSCj_j-w',
    'https://www.youtube.com/watch?v=AKjlJZHFbog',
    
  ];
  return (
    <div className="player-wrapper">
      <SideNav/><h2>Jonmar OhMyV33NUS</h2>
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

export default Page7;