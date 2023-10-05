import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

function AuthForm({ buttonTitle, onSubmitFunc }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Нужна почта").required("Нужен email"),
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
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && (
        <p className="form_error">{formik.errors.email}</p>
      )}
      <input
        type="password"
        name="password"
        id="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password && (
        <p className="form_error">{formik.errors.password}</p>
      )}
      <button type="submit">{buttonTitle}</button>
    </form>
  );
}

export default AuthForm;
