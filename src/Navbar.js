import React from "react";
import logo from "./images/logo.svg";

import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { openSideBar,openSubMenu,closeSubMenu } = useGlobalContext();
   const {user, loginWithRedirect,isAuthenticated,logout } = useAuth0();

  const displaySubMenu=(e)=>
  {
    e.preventDefault();
    const page=e.target.textContent;
    // console.log(page);
    const loc=e.target.getBoundingClientRect();
    console.log(page,"loc: ",loc);
    const center=(loc.left+loc.right)/2;
    const bottom=loc.bottom-3;
    openSubMenu(page,{center,bottom});
  }

  const handleSubmenu=(e)=>
  {
    // console.log(e.target.value);
    // if(typeof(e.target.value)==="undefined")
    // {
    //   closeSubMenu();
    // }

    if(!e.target.classList.contains('link-btn'))
    {
      closeSubMenu();
    }

  }


  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              Products
            </button>
          </li>
          <li className="link-btn">
            <button className="link-btn" onMouseOver={displaySubMenu}>
              Developers
            </button>
          </li>
          <li className="link-btn">
            <button className="link-btn" onMouseOver={displaySubMenu}>
              Company
            </button>
          </li>
        </ul>
        {isAuthenticated ? (
          <button
            className="signout-btn"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            <div className="tooltip">Sign Out</div>
            <dotlottie-player
              src="https://lottie.host/6e39630c-1c25-4761-9487-b6f979fce088/gWZ0BksWqw.json"
              background="transparent"
              speed="2"
              style={{ width: "62px", height: "62px"}}
              loop
              autoplay
            ></dotlottie-player>
          </button>
        ) : (
          <button
            className="btn signin-btn"
            style={{ backgroundColor: "transparent" }}
            onClick={() => loginWithRedirect()}
          >
            <div className="tooltip">SignIn</div>
            <lord-icon
              src="https://cdn.lordicon.com/kthelypq.json"
              trigger="hover"
              colors="primary:#30e8bd"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
