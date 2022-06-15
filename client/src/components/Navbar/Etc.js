import React from "react";
import "./Navbar.css";

function Etc({ closeModal }) {
  return (
    <>
      <div className="etcBox">
        <div className="exit" onClick={() => closeModal(false)}>
          X
        </div>
        <div className="miniTitle">중부대학교 암호프로그래밍</div>
        <div className="team">
          <h1>준준준</h1>
          <p>사용기술 : React, Node.js, MongoDB</p>
        </div>

        <ul className="teamWork">
          <li>
            전준영 <span>백엔드</span>
          </li>
          <li>
            최병준 <span>백엔드</span>
          </li>
          <li>
            김준현 <span>프론트엔드</span>
          </li>
        </ul>

        <div className="footer">Made By 준준준</div>
      </div>
    </>
  );
}

export default Etc;
