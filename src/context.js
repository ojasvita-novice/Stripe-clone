import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const AppContext=createContext();

export const AppProvider=({children})=>
{
    const [isSideBarOpen,setIsSideBarOpen]=useState(false);
    const [isSubMenuOpen,setIsSubMenuOpen]=useState(false);
    const [location,setLocation]=useState({});
    const [page,setPage]=useState({page:'',links:[]});

    const openSideBar=()=>
    {
        setIsSideBarOpen(true); 
    }

     const closeSideBar = () => {
       setIsSideBarOpen(false);
     };

      const openSubMenu = (text,coordinates) => {
        
        const page=sublinks.find((item)=>item.page===text);
        // console.log("setting page",page);
        setPage(page);
        setLocation(coordinates);
        setIsSubMenuOpen(true);
        
      };

      const closeSubMenu = () => {
        setIsSubMenuOpen(false);
      };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        setIsSideBarOpen,
        isSubMenuOpen,
        setIsSubMenuOpen,
        openSubMenu,
        closeSubMenu,
     openSideBar,closeSideBar,location,page}}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext=()=>
{
    return useContext(AppContext);
}

