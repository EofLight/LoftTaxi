import React from "react";

export const Login = () => {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" size="28" />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password" size="28" />
      <button id="btn-login" name="btn-login">Войти</button>
      
    </form>
  );
};
