import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.css';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    setIsOpen(true);
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    setIsOpen(false);
  };

  return (
    <div>
      <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
        <Link to="#" className="closebtn" onClick={closeNav}>&times;</Link>
        <Link to="/Page1">1.ChoOxTV</Link>
        <Link to="/Page2">2.Tims</Link>
        <Link to="/Page3">3.Kuku</Link>
        <Link to="/Page4">4.Alodia Gosiengfiao</Link>
        <Link to="/Page5">5.Dexie Diaz</Link>
        <Link to="/Page6">6.Cherizawa</Link>
        <Link to="/Page7">7.Jonmar "OhMyV33NUS"</Link>
        <Link to="/Page8">8.yawi</Link>
        <Link to="/Page9">9.h2wo </Link>
        <Link to="/Page10">10.dogie</Link>
      </div>
      <div id="main">
        <span
          style={{ fontSize: '30px', cursor: 'pointer' }}
          onClick={openNav}
        >
          &#9776;
        </span>
      
      </div>
    </div>
   
  );
};

export default SideNav;