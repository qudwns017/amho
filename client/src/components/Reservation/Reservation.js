import React, { useEffect } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
import styles from './Reservation.module.css';
import { Link } from "react-router-dom";
import { IoIosBackspace } from "react-icons/io";

const { kakao } = window;

function Reservation() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);


  return (
    <>
      <div className={styles.background1}>
          <div id="map" className={styles.image}>     
            <div className={styles.menu}>
              <Link to="/" className={styles.exit}><IoIosBackspace className={styles.exitI} /></Link>
              <div className={styles.title}>
                  <h1>팍플</h1><h2>+</h2>
              </div>
              <div className={styles.main}>
                <div className={styles.box1}>
                  <div>주문상품</div>
                  <ul>
                    <li>주차장 이름</li>
                    <li>주소</li>
                    <li>가격</li>
                    <li>시간</li>
                    <li>총계</li>
                  </ul>
                </div>
                <br/>
                <div className={styles.box2}>
                  <div>주문자 정보</div>
                  <ul>
                    <li>이름</li>
                    <li>이메일</li>
                    <li>연락처</li>  
                    <li>차량번호</li>
                  </ul>
                </div>
                <br/>
                <div className={styles.box3}>
                  <div>결제 정보</div>
                  <ul>
                    <li>총 주문금액</li>
                    <li>원</li>
                    <li>(예시) 1,000</li>
                  </ul>
                </div> 
                <br/>
                <div className={styles.box4}>
                  <div>결제 수단</div>
                  <ul>
                    <li>가상계좌 무통장입금</li>
                    <li>신용카드</li>
                    <li>실시간계좌이체</li>
                    <li>휴대폰 소액결제</li>
                  </ul>
                </div>
                <button className={styles.sell}>장소결제</button>
              </div>
            </div>
          </div>
      </div>
    
    </>
  );
}

export default Reservation;