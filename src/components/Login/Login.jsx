import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { getAuth } from "firebase/auth";

import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { userSliceActions } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = ({ email, password }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const payload = {
          uid: user.uid,
          email: user.email,
          token: user.accessToken,
        };
        dispatch(userSliceActions.setUser(payload));
        navigate("/");
      })
      .catch(console.errors);
  };

  return (
    <>
      <p>Login here</p>
      <AuthForm buttonTitle="Войти" onSubmitFunc={handleLogin} />
    </>
  );
}

export default Login;
