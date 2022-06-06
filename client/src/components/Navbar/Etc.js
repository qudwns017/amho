import React from "react";
import "./Navbar.css";

function Etc({ closeModal }) {
  return (
    <>
      <div className="etcBox">
        <div className="exit" onClick={() => closeModal(false)}>
          X
        </div>
        <div className="miniTitle">중부대학교 캡스톤디자인</div>
        <div className="team">
          <h1>준준준준보</h1>
          <p>사용기술 : React, Node.js, MongoDB</p>
        </div>

        <ul className="teamWork">
          <li>
            전준영 <span>주차공간등록 DB담당</span>
          </li>
          <li>
            최병준 <span>회원가입 및 로그인 DB담당</span>
          </li>
          <li>
            심정보 <span>리액트 프론트엔드</span>
          </li>
          <li>
            김준현 <span>리액트 프론트엔드</span>
          </li>
          <li>
            베준호 <span>자료조사 및 풀스택관리</span>
          </li>
        </ul>

        <div className="footer">made by korea</div>
      </div>
    </>
  );
}

export default Etc;
