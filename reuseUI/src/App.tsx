import { Button, Input } from "@mui/material";
import "./App.css";
import MyInput from "../components/Input";
import { MuiTypography } from "../components/MuiTypography";
import { useState, useEffect, FormEvent } from "react";
import MainButton from "../components/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [emailStatus, setEmailStatus] = useState(true);
  const [passwordStatus, setPasswordStatus] = useState(true);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    let a = emailVerify(email);
    let b = passwordVerify(password);
    if (a && b) {
      alert("登入成功");
    } else {
      alert("請重新登入");
    }
  }

  function emailVerify(email: string) {
    let emailRegxp =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == "") {
      setEmailStatus(false);
      alert("請輸入信箱");
      // setLogin(false)
      return false;
    } else {
      if (emailRegxp.test(email) != true) {
        setEmailStatus(false);
        alert("電子信箱格式錯誤");
        // setLogin(false)
        return false;
      } else {
        //     setEmailStatus(true)放在onchange
        alert("信箱正確");
        setEmailStatus(true);
        return true;
        // setLogin(true)
      }
    }
  }

  function passwordVerify(password: string) {
    let passwordRegxp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    if (password == "") {
      setPasswordStatus(false);
      alert("請輸入密碼");
      return false;
      // setLogin(false)
    } else {
      if (passwordRegxp.test(password) != true) {
        setPasswordStatus(false);
        alert("密碼格式有誤");
        return false;
        // setLogin(false)
      } else {
        alert("密碼正確");
        setPasswordStatus(true);
        return true;
        //  setLogin(true)
      }
    }
  }

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="title">
            <div className="mainTitle">Sign In</div>
            <div className="subTitle">
              Don't have an accout?{" "}
              <a href="#" className="newAccount">
                Create account
              </a>
            </div>
          </div>
          <div
            className="warning"
            style={{
              display: emailStatus && passwordStatus ? "none" : "block",
            }}
            id="warning"
          >
            <div className="warningTitle">
              Incorrect password or invalid account
            </div>
            <div className="warningContent">
              Please make sure your email and password are correct.
            </div>
          </div>

          <div className="email section">
            <div className="emailTitle">
              <span>Email</span>
            </div>
            <MyInput
              mode="email"
              setEmailStatus={setEmailStatus}
              id="emailInput"
              status={emailStatus}
              className="emailInput"
              setEmail={setEmail}
              email={email}
            />
          </div>
          <div className="password section">
            <div className="passwordTitle">
              <span>Password</span>
              <a href="#" className="forgotPassword">
                Forgot password?
              </a>
            </div>
            <MyInput
              mode="password"
              show={show}
              setPasswordStatus={setPasswordStatus}
              id="passwordInput"
              status={passwordStatus}
              className="passwordInput"
              setPassword={setPassword}
              password={password}
            />
            <div className="eye">
              {show ? (
                <FontAwesomeIcon
                  icon={faEye}
                  id="showPassword"
                  onClick={() => setShow(false)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  onClick={() => setShow(true)}
                  id="noShowPassword"
                />
              )}
            </div>
          </div>
          <div className="signInSection">
            <MainButton email={email} password={password} />
          </div>
        </form>
      </div>
      <footer className="copyRight">2021 Allxon. All rights reserved.</footer>
    </div>
  );
}

export default App;
