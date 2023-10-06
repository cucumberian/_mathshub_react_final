import React from "react";
import Register from "../components/Register/Register";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function RegisterPage() {
  return (
    <div>
      <h1>Страница регистрации</h1>
      <Register />
    </div>
  );
}

export default RegisterPage;
