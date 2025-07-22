
import React, { useEffect } from 'react';
import "./parallaxstyle.css"; 

import bg from "../assets/background.jpg";
import moon from "../assets/moon.png";
import mountain from "../assets/mountain.png";
import road from "../assets/road.png";

function Parallax() {

    useEffect(() => {
    const bgEl = document.getElementById('bg');
    const moonEl = document.getElementById('moon');
    const mountainEl = document.getElementById('mountain');
    const roadEl = document.getElementById('road');
    const textEl = document.getElementById('text');
    
   const handleScroll = () => {
const value = window.scrollY;
if (bgEl) bgEl.style.top = value * 0.5 + 'px';
if (moonEl) moonEl.style.left = -value * 0.5 + 'px';
if (mountainEl) mountainEl.style.top = -value * 0.15 + 'px';
if (roadEl) roadEl.style.top = value * 1 + 'px';
if (textEl) {
  const scroll = window.scrollY;
  const baseTop = 200; 
  const maxShift = 100; 

  const newTop = baseTop + Math.min(scroll * 0.3, maxShift);
  textEl.style.top = `${newTop}px`;
}

}; 

    window.addEventListener('scroll', handleScroll);

    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section>
      <img src={bg} id="bg" alt="background" />
      <img src={moon} id="moon" alt="moon" />
      <img src={mountain} id="mountain" alt="mountain" />
      <img src={road} id="road" alt="road" />
      <h2 id="text">Moonelle</h2>
      
    </section>
  
  );
  
}

export default Parallax;