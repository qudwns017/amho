import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
import LoginM from "../Login/LoginM";

function Login() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };

  return (
    <div className="Login">
      {/* 로그인 모달창 */}
      {openModal && (
        <div
          id="LoginM"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <LoginM closeModal={setOpenModal} />
        </div>
      )}
      <div className={styles.RLogin}>
        <a
          href="#!"
          className={styles.openModalBtn1}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          로그인
        </a>

        <Link to="/register">
          <a href="#!" className={styles.openModalBtn2}>
            회원가입
          </a>
        </Link>
        <a href="#!" className={styles.openModalBtn3} onClick={onClickHandler}>
          로그아웃
        </a>
      </div>
    </div>
  );
}

export default Login;
