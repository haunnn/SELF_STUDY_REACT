import React, { useState } from "react";
import { firebaseAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "../service/firebase";


function LogIn() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 일반 로그인
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
  
  // 소셜 회원가입 & 로그인
  const onSocialLogin = async (e) => {
    e.preventDefault();
    
    try {
      const provider = new GoogleAuthProvider()
      const user = await signInWithPopup(
        firebaseAuth, 
        provider
      );

      if (user._tokenResponse.isNewUser) {
        // 회원가입한 경우 -> 회원가입 후 로그인까지 함.
        console.log('회원가입 완료')
        console.log(user)

        // nickname 더미값 입력해서 DB에 추가


      } else {
        // 회원가입 되어 있는 경우 -> 로그인만 함.
        console.log('로그인 완료')
        console.log(user)


      }

      // 로그인 후에 UID + REFRESH TOKEN BE에 보내기


    } catch (err) {
      console.log(err.message);
      alert(err.code)
    }
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
