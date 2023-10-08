import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { auth } from "../../firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import EnteredAsUser from "../EnteredAsUser/EnteredAsUser";
import { Link } from "react-router-dom";

function Login() {
  const { authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setAuthUser(user);
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <>
      {authUser !== null && <EnteredAsUser email={authUser.email} />}

      {authUser === null && (
        <>
          <AuthForm buttonTitle="Войти" onSubmitFunc={handleLogin} />
          <p>
            Или <Link to="/register">зарегистрируйтесь</Link>
          </p>
        </>
      )}
    </>
  );
}

export default Login;
