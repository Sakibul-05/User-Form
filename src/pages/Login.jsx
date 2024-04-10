import React from "react";
import InputField from "../components/InputField";

const Login = () => {
  return (
    <div className="Login">
      <h2>Login</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        accusantium placeat eius atque similique amet, quisquam facilis
        quibusdam explicabo pariatur sequi doloremque fuga itaque maiores
        molestiae voluptate obcaecati temporibus alias.
      </p>
      <InputField
        type="email"
        fieldName="Email Address"
        placeholder="Enter email address"
      ></InputField>
      <InputField
        type="password"
        fieldName="Password"
        placeholder="Enter password"
      ></InputField>
    </div>
  );
};

export default Login;
