import React from "react";
import Button from "../components/Button";

const Landing = () => {
  return (
    <div className="landing">
      <h1>Welcome to the Coding Dojo!</h1>
      <p>
        This is a space for developers of all skill levels and backgrounds to
        collabor{" "}
      </p>
      <Button text={"Create Account"}></Button>
      <Button text={"Already Registered? Login"}></Button>
    </div>
  );
};

export default Landing;
