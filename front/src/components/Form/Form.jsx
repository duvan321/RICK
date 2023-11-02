import React, { useState } from "react";
import Validation from "../Validations/Validation";
import { useDispatch } from "react-redux";
import img from "/src/img/Rick_y_Morty.jpg";
import { posLogin } from "../../Redux/actions";
import stayle from "../Form/Form.module.css";

const Form = ({ login }) => {
  const dispatch = useDispatch();

  // Agrega un estado para controlar qué formulario se muestra
  const [showLoginForm, setShowLoginForm] = useState(true);

  // Estados para los datos del formulario de inicio de sesión
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  // Estados para los datos del formulario de registro
  const [registrationFormData, setRegistrationFormData] = useState({
    email: "",
    password: "",
  });

  // Estados para los errores
  const [loginErrors, setLoginErrors] = useState({});
  const [registrationErrors, setRegistrationErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (showLoginForm) {
      // Actualiza el estado del formulario de inicio de sesión
      setLoginFormData({
        ...loginFormData,
        [name]: value,
      });

      // Valida los datos del formulario de inicio de sesión
      setLoginErrors(Validation({ ...loginFormData, [name]: value }));
    } else {
      // Actualiza el estado del formulario de registro
      setRegistrationFormData({
        ...registrationFormData,
        [name]: value,
      });

      // Valida los datos del formulario de registro
      setRegistrationErrors(
        Validation({ ...registrationFormData, [name]: value })
      );
    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    login(loginFormData);
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    dispatch(posLogin(registrationFormData));
  };

  // Función para alternar entre el formulario de inicio de sesión y el formulario de registro
  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className={stayle.form}>
      <div className={stayle.cardForm}>
        <h2>{showLoginForm ? "Iniciar sesión" : "Registro de Usuario"}</h2>
        <img className={stayle.formImage} src={img} alt="" />
        <form
          onSubmit={
            showLoginForm ? handleLoginSubmit : handleRegistrationSubmit
          }
        >
          <label>Email:</label>
          <br />
          <input
            onChange={handleChange}
            value={
              showLoginForm ? loginFormData.email : registrationFormData.email
            }
            type="mail"
            name="email"
            className={stayle.inputForm}
          />
          {showLoginForm ? (
            loginErrors.e1 ? (
              <p>{loginErrors.e1}</p>
            ) : loginErrors.e2 ? (
              <p>{loginErrors.e2}</p>
            ) : (
              <p>{loginErrors.e3}</p>
            )
          ) : registrationErrors.e1 ? (
            <p>{registrationErrors.e1}</p>
          ) : registrationErrors.e2 ? (
            <p>{registrationErrors.e2}</p>
          ) : (
            <p>{registrationErrors.e3}</p>
          )}
          <br />
          <label>Password:</label>
          <br />
          <input
            onChange={handleChange}
            value={
              showLoginForm
                ? loginFormData.password
                : registrationFormData.password
            }
            type="password"
            name="password"
            className={stayle.inputForm}
          />
          {showLoginForm ? (
            loginErrors.p1 ? (
              <p>{loginErrors.p1}</p>
            ) : (
              <p>{loginErrors.p2}</p>
            )
          ) : registrationErrors.p1 ? (
            <p>{registrationErrors.p1}</p>
          ) : (
            <p>{registrationErrors.p2}</p>
          )}
          <br />
          <button className={stayle.button}>
            {showLoginForm ? "Iniciar" : "Registrarse"}
          </button>
        </form>
        <button onClick={toggleForm}>
          {showLoginForm ? "Registrarse" : "Iniciar sesión"}
        </button>
      </div>
    </div>
  );
};

export default Form;
