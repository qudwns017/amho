import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
import styles from "./Reservation.module.css";
import { Link } from "react-router-dom";
import { IoIosBackspace } from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";

const { kakao } = window;

function Reservation() {
  //지도
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.712659, 126.893636),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    var markerPosition1 = new kakao.maps.LatLng(37.712659, 126.891436);
    var marker1 = new kakao.maps.Marker({
      position: markerPosition1,
    });
    marker1.setMap(map);
  }, []);

  const [Time, setTime] = useState("");
  const [Hour, setHour] = useState("");

  const onTimeHandler = (event) => {
    setTime(event.currentTarget.value);
  };

  const onHourHandler = (event) => {
    setHour(event.currentTarget.value);
  };

  //사용자 정보
  var match = document.cookie.match(new RegExp("(^| )id=([^;]+)"));
  const username = decodeURIComponent(match[2]);

  var match = document.cookie.match(new RegExp("(^| )email=([^;]+)"));
  const email = decodeURIComponent(match[2]);

  var match = document.cookie.match(new RegExp("(^| )tel=([^;]+)"));
  const tel = decodeURIComponent(match[2]);

  let price = 1500 * Hour;

  return (
    <>
      <div className={styles.background1}>
        <div id="map" className={styles.image}>
          <div className={styles.menu}>
            <Link to="/" className={styles.exit}>
              <IoIosBackspace className={styles.exitI} />
            </Link>
            <div className={styles.title}>
              <h1>핫플</h1>
              <h2>+</h2>
            </div>
            <div className={styles.main}>
              <div className={styles.box1}>
                <div>주문상품</div>
                <ul>
                  <li>
                    <h4>장소 이름</h4>
                    <h3>중부대학교</h3>
                  </li>
                  <li>
                    <h4>주소</h4>
                    <h3>경기 고양시 덕양구 대자동 1286</h3>
                  </li>
                  <li>
                    <h4>가격</h4>
                    <h3>1,500 원</h3>
                  </li>
                  <li>
                    <h4>시작시간</h4>
                    <h3>
                      <input
                        type="time"
                        value={Time}
                        onChange={onTimeHandler}
                      />
                    </h3>
                  </li>
                  <li>
                    <h4>이용시간</h4>
                    <h3>
                      <input
                        type="number"
                        value={Hour}
                        onChange={onHourHandler}
                      />
                      시간
                    </h3>
                  </li>
                  <li className={styles.endB}>
                    <h4>총계</h4>
                    <h3>{price}원</h3>
                  </li>
                </ul>
              </div>
              <br />
              <div className={styles.box2}>
                <div>주문자 정보</div>
                <ul>
                  <li>
                    이름 <h2>{username}</h2>
                  </li>
                  <li>
                    이메일 <h2>{email}</h2>
                  </li>
                  <li>
                    연락처 <h2>{tel}</h2>
                  </li>
                </ul>
              </div>
              <br />
              <div className={styles.box3}>
                <div>결제 정보</div>
                <ul>
                  <li>총 주문금액</li>
                  <li>{price}</li>
                  <li>원</li>
                </ul>
              </div>
              <br />
              <div className={styles.box4}>
                <div>결제 수단</div>
                <ul>
                  <li>
                    <h2>
                      <BsIcons.BsPiggyBank />
                    </h2>
                    가상계좌 무통장입금
                  </li>
                  <li>
                    <h2>
                      <AiIcons.AiOutlineCreditCard />
                    </h2>
                    신용카드
                  </li>
                  <li>
                    <h2>
                      <BsIcons.BsClockHistory />
                    </h2>
                    실시간계좌이체
                  </li>
                  <li>
                    <h2>
                      <GiIcons.GiSmartphone />
                    </h2>
                    휴대폰 소액결제
                  </li>
                </ul>
              </div>
              <Link to="/ticket">
                <button className={styles.sell}>결 제</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservation;
