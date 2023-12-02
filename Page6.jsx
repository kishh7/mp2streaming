import React from 'react'
import ReactPlayer from 'react-player';
import './Channels.css';
import SideNav from '../Sidenav';

const Page6 = () => {
  const videoURLs = [
    'https://www.youtube.com/watch?v=hfFQDABPIak&t=1s',
    'https://www.youtube.com/watch?v=_UVoEBgE0jY',
    'https://www.youtube.com/watch?v=HHTHQCB7VdA',
    'https://www.youtube.com/watch?v=xYOU6FJ4JJg',
    'https://www.youtube.com/watch?v=I4n3mbeEUqw',
    'https://www.youtube.com/watch?v=DMiwKHXit10',
    'https://www.youtube.com/watch?v=sA6oA3YLEF0'
    
  ];
  return (
    <div className="player-wrapper">
     <SideNav/> <h2>Cherizawa Streaming</h2>
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

export default Page6;