import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";
import EnteredAsUser from "../EnteredAsUser/EnteredAsUser";
import AuthForm from "../AuthForm/AuthForm";

function Register() {
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useAuth();

  const handleRegister = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthUser(userCredential.user);
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <>
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
