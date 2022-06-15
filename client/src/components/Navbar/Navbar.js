import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";
import Etc from "./Etc";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {openModal && (
        <div
          id="Etc"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <Etc closeModal={setOpenModal} />
        </div>
      )}
      <IconContext.Provider value={{ color: "#fff" }}>
        <section className={sidebar ? "navbar active" : "navbar"}>
          <Link to="#" className="menu-bars" onClick={showSidebar}>
            <h3>
              <FaIcons.FaBars />
            </h3>
            <h1>Hot Place</h1>
            <h5>+</h5>
          </Link>
        </section>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" onClick={showSidebar}>
                <h2>
                  <AiIcons.AiFillPushpin />
                </h2>
                <h4>핫플</h4>
                <h5>+</h5>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-text">
              <a
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <IoIcons.IoMdHelpCircle />
                <span>제작정보</span>
              </a>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
