import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { auth } from "../../firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import EnteredAsUser from "../EnteredAsUser/EnteredAsUser";
import { Link } from "react-router-dom";
import Modal from "../../UI/Modal";

function Login() {
  const { authUser, setAuthUser } = useAuth();
  const [loginError, setLoginError] = React.useState(null);
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setAuthUser(user);
        navigate("/");
      })
      .catch((error) => {
        setLoginError(error.message);
        console.error(error);
      });
  };

  return (
    <>
      {loginError && (
        <Modal
          closeHandler={() => {
            setLoginError(null);
          }}
        >
          <p>Ошибка: неверные логин или пароль</p>
        </Modal>
      )}

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
