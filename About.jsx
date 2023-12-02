import React from 'react'
import twerplelogo from './img/twerple logo.png';
import './About.css';

const About = () => {
  return (
    <div className="about" id="about">
    <div className="container">
      <div className="heading1">About <span>Us</span></div>
      <div className="row">
      <div className="col-md-6">
        <div className="card">
          <img src={twerplelogo}/>
        </div>
      </div>
      <div className="col-md-6">
        <h3>Twerple</h3>
        <p>welcome home. Watch what you love, connect with streamers, and chat with tons of communities ThumbsUp
          <br/><br/>
          Twerple is where millions of people come together live every day to chat, interact, and make their own entertainment together.
          <br/><br/>
          Chat, laugh, and bond together. It’s like sharing one couch with thousands of friends.
          <br/><br/>
          Your creative content thrives here. Bring your passions; we’ll help you build a community around them.
          <br/><br/>
          Ready to build real connections with a huge, engaged audience? We’ve got a few million friends we’d like you to meet.
          <br/><br/>
          You’ve got a passion to share. A talent to teach. A story to tell. From games to music to sports and beyond, there’s an audience waiting for you on Twerple.
        </p>
      </div>
    </div>


    </div>
    </div>
    
  )
}

export default About