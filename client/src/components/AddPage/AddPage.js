import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { company } from "../../_actions/user_action";
import MapContainer from "../../api/MapContainer3";
import * as markerpath from "../../api/MapContainer3";
import styles from "./AddPage.module.css";

function AddPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Time, setTime] = useState("");
  const [Price, setPrice] = useState("");

  const markerpath2 = localStorage.getItem("marker");
  console.log(markerpath2);

  const onUsernameHandler = (event) => {
    setUsername(event.currentTarget.value);
  };

  const onTimeHandler = (event) => {
    setTime(event.currentTarget.value);
  };

  const onPriceHandler = (event) => {
    setPrice(event.currentTarget.value);
  };
  console.log(markerpath);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      username: Username,
      time: Time,
      price: Price,
    };

    dispatch(company(body)).then((response) => {
      if (response.payload.success) {
        alert("성공");
        navigate("/");
      } else {
        alert("등록 정보가 잘못되었습니다.");
      }
    });
  };

  useEffect(() => {
    MapContainer();
  });

  return (
    <>
      <div
        id="myMap"
        style={{
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className={styles.box}>
          <form onSubmit={onSubmitHandler}>
            <div className={styles.title}>주차장 등록</div>
            <ul className={styles.list}>
              <li>
                <label>주차장 이름</label>
                <input
                  type="username"
                  value={Username}
                  onChange={onUsernameHandler}
                />
              </li>
              <li>
                <label>주소 </label>
                <input type="place" value={"12s"} />
              </li>
              <li>
                <label>주차시간</label>
                <input type="time" value={Time} onChange={onTimeHandler} />
              </li>
              <li>
                <label>1시간당 가격 </label>
                <input type="price" value={Price} onChange={onPriceHandler} />
              </li>
              <li className={styles.imageBox}>
                <label>사진 </label>
                <div className={styles.image}>
                  <img src="./profile.png"></img>
                </div>
              </li>
            </ul>
            <br />
            <button type="submit" className={styles.fin}>
              주차 공간 등록
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddPage;
