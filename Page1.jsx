import React from 'react'
import ReactPlayer from 'react-player';
import './Channels.css';
import SideNav from '../Sidenav';

const Page1 = () => {
 
    const videoURLs = [
        'https://www.youtube.com/watch?v=AhbuUxWjtEw',
        'https://www.youtube.com/watch?v=Ui2RhnUp47k',
        'https://www.youtube.com/watch?v=MT66oTyWS8g',
        'https://www.youtube.com/watch?v=OSaQOshn8IA',
        'https://www.youtube.com/watch?v=p1PEAF7H2as',
        'https://www.youtube.com/watch?v=-UQoxf-Py4w',
      ];
  return (
    
    <div className="player-wrapper">
    <SideNav/>  <h2>ChooxTv Streaming</h2>
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

export default Page1;

