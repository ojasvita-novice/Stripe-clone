import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  
  const {closeSideBar,isSideBarOpen}=useGlobalContext();


  return <div className={`${isSideBarOpen?"sidebar-wrapper show":"sidebar-wrapper"}`} >
 
 <aside className="sidebar">
  <button className="close-btn" onClick={closeSideBar}><FaTimes/></button>
  <div className="sidebar-links">
    {sublinks.map((item,index)=>
    {
      const {links,page}=item;
       return  <article key={index}>
        <h4>{page}</h4>
        <div className="sidebar-sublinks">
         {links.map((link,index)=>
       { 
        const {label,icon,url}=link;

        return (
          <a href={url} key={index}>
            {icon}
            {label}
          </a>
        );

    })}
        </div>
       </article>
      
    })}
  </div>
 </aside>
</div> 
}

export default Sidebar
