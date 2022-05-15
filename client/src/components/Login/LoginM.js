import React, { useState } from "react";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_action";
import { useNavigate, Link } from "react-router-dom";

function LoginM({closeModal}) {

    const dispatch = useDispatch();
  const navigate = useNavigate();

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
        navigate("/");
      } else {
        alert("Error˝");
      }
    });
  };


    return (
        <div className="modalBackground">
            <div className="modalContainer">    
                <form onSubmit={onSubmitHandler}>
                    <div className={styles.background} onClick={()=> closeModal(false)}></div>
                    <div className={styles.loginBox}>
                        <div className={styles.loginForm}>
                            <h1>로그인</h1>

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
                            <div className={styles.pass}>Forgot Password?</div>
                            <div className={styles.link}>
                                <p>아직 계정이 없으신가요? <Link to="/register">회원가입</Link></p>
                                
                            </div>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default LoginM;