import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_action";
import * as AiIcons from "react-icons/ai";



function Login() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      email: Email,
      password: Password,
    };
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        alert("로그인에 성공하였습니다.");
        window.location.replace("/");
        navigate("/");
      } else {
        alert(response.payload.message);
      }
    });
  };

  return (
    <div className="Login">
      {openModal && (
        <div
          id="RegisterPage"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <RegisterPage closeModal={setOpenModal} />
        </div>
      )}
      <form onSubmit={onSubmitHandler}>
        <div className={styles.loginBox}>
          <div className={styles.design}></div>
          <div className={styles.loginForm}>
            <div className={styles.loginTitle}>
              <h1>팍플</h1>
              <h5>+</h5>
              <h2>
                <AiIcons.AiFillCar />
              </h2>
            </div>
            <div className={styles.txt_field}>
              <input
                className={styles.input}
                type="Email"
                autocomplete="off"
                onChange={onEmailHandler}
                required
              />
              <label>Email</label>
            </div>
            <div className={styles.txt_field}>
              <input
                className={styles.input}
                type="Password"
                autocomplete="off"
                onChange={onPasswordHandler}
                required
              />
              <label>Password</label>
            </div>
            <button className={styles.button} type="submit">
              로그인
            </button>
            <div className={styles.link}>
              <div className={styles.sign}>
                <a
                  className={styles.signL}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  회원가입
                </a>
                {/* <Link to="/register" className={styles.signL}>회원가입</Link> */}
              </div>
              <div className={styles.pass1}>아이디 찾기</div>
              <div className={styles.pass2}>비밀번호 찾기</div>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
}

export default Login;
