import React, { useState } from "react";
// import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { addspot } from "../../_actions/user_action";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function RegisterPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [HandPhone, setHandPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [CarNumber, setCarNumber] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onHandPhoneHandler = (event) => {
    setHandPhone(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onCarNumberHandler = (event) => {
    setCarNumber(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
      tel: HandPhone,
      carnum: CarNumber,
    };

    dispatch(addspot(body)).then((response) => {
      if (response.payload.success) {
        alert("회원가입이 완료되었습니다.");
        window.location.replace("/");
        navigate("/");
      } else {
        alert("Failed to sign up");
      }
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div></div>
      <div>
        <h1>회원가입</h1>
        <div>
          <div>이메일</div>
          <input type="email" value={Email} onChange={onEmailHandler} />
        </div>

        <div>
          <div>이름</div>
          <input type="text" value={Name} onChange={onNameHandler} />
        </div>

        <div>
          <div>비밀번호</div>
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />
        </div>

        <div>
          <div>비밀번호 확인</div>
          <input
            type="password"
            value={ConfirmPassword}
            onChange={onConfirmPasswordHandler}
          />
        </div>

        <div>
          <div>전화번호</div>
          <input type="text" value={HandPhone} onChange={onHandPhoneHandler} />
        </div>

        <div>
          <div>차량번호</div>
          <input type="text" value={CarNumber} onChange={onCarNumberHandler} />
        </div>

        <div>
          <button type="submit">가입하기</button>
        </div>
      </div>
    </form>
  );
}

export default RegisterPage;
