import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const redir = () => navigate("/protected", { replace: true });
  useEffect(() => {
    if (store.loggedIn === true) redir();
  }, [store.loggedIn]);
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    actions.getLogin(values);
  };
  return (
    <div className="container card m-auto">
      <div className="row py-3">
        <h1>Login Rigo!!</h1>
        <form onSubmit={formSubmit}>
          <input
            value={values.email}
            name="email"
            onChange={handleInputChange}
            onLoad={handleInputChange}
          />
          <input
            value={values.password}
            name="password"
            onChange={handleInputChange}
            onLoad={handleInputChange}
          />
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
