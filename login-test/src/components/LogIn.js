import React, { useState } from "react";
import { firebaseAuth, signInWithEmailAndPassword } from "../service/firebase";
import Auth from "../service/auth";


function LogIn() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      const loginUser = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      setEmail("");
      setPassword("");
      console.log("로그인 완료");
      console.log(loginUser)
    } catch (err) {
      console.log(err.message);
      alert(err.code)
    }
  };
  

  const onSocialLogin = (e) => {
    e.preventDefault();
    const auth = new Auth();
    
    
    auth.login(e.target.textContent).then(console.log)
  }


  return (
    <div>
      <h1>로그인</h1>
      <input
        type="text"
        placeholder="ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={onLogin}>
        로그인
      </button>

      <button type="submit" onClick={onSocialLogin}>
        Google 로그인
      </button>
    </div>
  );
}


export default LogIn;
