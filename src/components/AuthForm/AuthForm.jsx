import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import "./AuthForm.scss";

function AuthForm({ buttonTitle, onSubmitFunc }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Почта неправильная").required("Нужна почта"),
      password: Yup.string()
        .required("Нужен пароль")
        .min(6, "Минимум 6 символов")
        .matches(/[a-zA-Z0-9]/, "В пароле могут быть только буквы и цифры"),
    }),
    onSubmit: (values) => {
      onSubmitFunc({ email: values.email, password: values.password });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder=" Введите почту"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <p className="form_error">
        {formik.touched.email && formik.errors.email && formik.errors.email}
      </p>

      <input
        type="password"
        name="password"
        id="password"
        placeholder=" Введите пароль"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <p className="form_error">
        {formik.touched.password &&
          formik.errors.password &&
          formik.errors.password}
      </p>

      <button type="submit">{buttonTitle}</button>
    </form>
  );
}

export default AuthForm;
