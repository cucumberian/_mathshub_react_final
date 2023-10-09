import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";
import EnteredAsUser from "../EnteredAsUser/EnteredAsUser";
import AuthForm from "../AuthForm/AuthForm";
import Modal from "../../UI/Modal";

function Register() {
  const [registerError, setRegisterError] = React.useState(null);
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useAuth();

  const handleRegister = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthUser(userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        setRegisterError(error.message);
        console.error(error);
      });
  };

  return (
    <>
      {registerError && (
        <Modal
          closeHandler={() => {
            setRegisterError(null);
          }}
        >
          <p>Ошибка регистрации: такой пользователь уже есть.</p>
        </Modal>
      )}
      {authUser !== null && <EnteredAsUser email={authUser.email} />}

      {authUser === null && (
        <div>
          <AuthForm
            buttonTitle="Зарегистрироваться"
            onSubmitFunc={handleRegister}
          />
          <p>
            Или <Link to="/login">войдите</Link>
          </p>
        </div>
      )}
    </>
  );
}

export default Register;
