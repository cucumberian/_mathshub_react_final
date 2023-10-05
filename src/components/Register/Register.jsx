import React from "react";
import AuthForm from "../AuthForm/AuthForm";

import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../../store/userSlice";

function Register() {
  const dispatch = useDispatch();
  const handleRegister = ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const payload = {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          token: userCredential.user.accessToken,
        };
        dispatch(userSliceActions.setUser(payload));
      })
      .catch(console.error);
  };

  return (
    <>
      <p>Register here</p>
      <AuthForm
        buttonTitle="Зарегистрироваться"
        onSubmitFunc={handleRegister}
      />
    </>
  );
}

export default Register;
