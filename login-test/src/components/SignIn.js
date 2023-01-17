import React, { useState } from "react";
import { firebaseAuth, createUserWithEmailAndPassword } from "../service/firebase";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickname, setNickname] = useState("");

  const onSignin = async (e) => {
    e.preventDefault();

    // 비밀번호1 비밀번호2 같은지 확인
    if (password1 !== password2) {
      alert("Passwords don't match");
      return;
    }

    // Nickname 입력 확인
    if (!nickname) {
      alert("Nickname is required");
      return;
    }

    // Firebase 회원가입
    try {
      const signupUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password1
      );
      console.log("Firebase 회원가입 완료");
      console.log(signupUser);
      
      setEmail("");
      setPassword1("");
      setPassword2("");
      setNickname("");
      
      // firebase 회원가입 완료했을 시에, BE에 email, uid, nickname 보내줘야함 (signupUser에 있음)
      // DB에 성공적으로  저장됐다는 신호 오면, 로그인시켜서 메인페이지로 redirect

    } catch (err) {
      console.log(err.message);
      alert(err.code);
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <input
        type="text"
        placeholder="ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />
      <input
        type="text"
        placeholder="password 확인"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <input
        type="text"
        placeholder="nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <button type="submit" onClick={onSignin}>
        회원가입
      </button>
    </div>
  );
}

export default SignIn;
