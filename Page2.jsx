import React from 'react'
import ReactPlayer from 'react-player';
import './Channels.css';
import SideNav from '../Sidenav';
const Page2 = () => {
  const videoURLs = [
    'https://www.youtube.com/watch?v=70IuJgTMMZ0',
    'https://www.youtube.com/watch?v=DgiklJ4w3So',
    'https://www.youtube.com/watch?v=mpYrt5C2xsE',
    'https://www.youtube.com/watch?v=YgTE6iyL-hQ',
    'https://www.youtube.com/watch?v=RG362gNgniQ',
    'https://www.youtube.com/watch?v=meDshuQYKuM'
    
  ];
  return (
    <div className="player-wrapper">
      <SideNav/> <h2>Tims Streaming</h2>
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

export default Page2;