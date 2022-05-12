import React, { useState } from 'react';
import "../style.css";
import Menu from "./menuApi";
import Menucard from "./Menucard";

const Resturant = () => {
    const [menuData ,setMenuData] = useState(Menu);
   
  return (
    <>
    <nav className="navbar">
      <button className="btn-group__item">Breakfast</button>
      <button className="btn-group__item">Lunch</button>
      <button className="btn-group__item">Dinner</button>
      <button className="btn-group__item">Evening</button>
      <button className="btn-group__item">All</button>
    </nav>
     <Menucard menuData={menuData}/>
    
    
    </>
      
    
  );
};

export default Resturant;


