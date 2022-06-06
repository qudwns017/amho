import React from "react";
import axios from "axios";
import styles from "./Login.module.css";
import * as AiIcons from "react-icons/ai";

var deleteCookie = function (name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

function Info() {
  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        console.log(response.data.success);
        deleteCookie("x_auth");
        deleteCookie("id");
        deleteCookie("tel");
        deleteCookie("carnum");
        deleteCookie("email");

        window.location.reload();
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
        console.log(response.data.success);
      }
    });
  };

  // 사용자 이름 불러오기
  var match = document.cookie.match(new RegExp("(^| )" + "id" + "=([^;]+)"));
  const username = decodeURIComponent(match[2]);

  var match = document.cookie.match(new RegExp("(^| )" + "email" + "=([^;]+)"));
  const email = decodeURIComponent(match[2]);

  var match = document.cookie.match(
    new RegExp("(^| )" + "carnum" + "=([^;]+)")
  );
  const carnum = decodeURIComponent(match[2]);

  var match = document.cookie.match(new RegExp("(^| )" + "tel" + "=([^;]+)"));
  const tel = decodeURIComponent(match[2]);

  return (
    <>
      <form>
        <div className={styles.loginBox2}>
          <div className={styles.design2}></div>
          <div className={styles.loginForm2}>
            <div className={styles.loginTitle2}>
              <div>{username}</div>
              <h2>
                <AiIcons.AiFillCar />
              </h2>
            </div>
            <div>
              <li>{email}</li>
              <li>{carnum}</li>
              <li>{tel}</li>
            </div>
            <div className={styles.buttonS}>
              <a className={styles.button1}>정보수정</a>
              <a className={styles.button2} onClick={onClickHandler}>
                로그아웃
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Info;