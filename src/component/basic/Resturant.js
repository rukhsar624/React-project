import React, { useState } from 'react';
import "../style.css";
import Menu from "./menuApi";
import Menucard from "./Menucard";

const Resturant = () => {
  // const [AllData, setAllData] = useState(Menu);
  const [menuData, setMenuData] = useState(Menu);
  
  
  const fliterItem = (category ) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category == category ;
    
      
    });
   
    
    setMenuData(updatedList);
  };

  // const fliterAll = (type) => {
  //   const updatedListt = Menu.filter((curElem) => {
  //     return curElem.type === type
  //   }); type
  //   setAllData(updatedListt);
  // };
  return (
    <>
      <nav className="navbar">
        <button className="btn-group__item" onClick={() => fliterItem("breakfast")}>Breakfast</button>
        <button className="btn-group__item" onClick={() => fliterItem("lunch")}>Lunch</button>
        <button className="btn-group__item" onClick={() => fliterItem("dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={() => fliterItem("Snacks")}>Snacks</button>
        <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button>
        {/* <button className="btn-group__item" onClick={() => menuData}>All</button> */}
        {/* onClick={()=>setMenuData("Menu")} */}
      </nav>
      <Menucard menuData={menuData}/>
      {/* <Menucard AllData={AllData}   /> */}


    </>


  );
};

export default Resturant;


