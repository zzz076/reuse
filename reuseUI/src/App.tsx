import { Button, Input } from '@mui/material'
import './App.css'
import MyInput from '../components/Input'
import {MuiTypography} from '../components/MuiTypography'
import { useState } from 'react'
function App() {
  
  const [email, useEmail] = useState('');
  const [password, usePassword] = useState('')

  function EmailVerify(email:string) {
    // 驗證信箱是否正確
  }
  
  function PasswordVerify (password:string){
    // 驗證密碼是否正確
  }



  return (
   <div className='App'>
    
      <div className="container">
        <form>
        <div className="title">
          <div className="mainTitle">Sign In</div>
          <div className="subTitle">Don't have an accout? <a href="#" className="newAccount">Create account</a></div>
        </div>
        <div className="warning">
          <div className="warningTitle">Incorrect password or invalid account</div>
          <div className="warningContent">Please make sure your email and password are correct.</div>
        </div>

        <div className="email section"> 
          <div className='emailTitle'>
            <span>Email</span>
          </div>
          <MyInput mode="email" className='emailInput' useEmail={useEmail} email={email}/>
        </div>
        <div className="password section">
          <div className="passwordTitle">
            <span>Password</span>
            <a href="#" className="forgotPassword">
              Forgot password?
            </a>
          </div>
          <MyInput mode="password" className="passwordInput" usePassword={usePassword} password={password}/>
        </div>
        <div className="signIn">
         <button>sign in</button>
        </div>
        </form>
      </div>
      <footer className="copyRight">
          2021 Allxon. All rights reserved.
      </footer>
   </div>
  )
}

export default App
