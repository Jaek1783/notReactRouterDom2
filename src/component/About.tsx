import React, { useContext } from "react";
import { RouterContext } from "../router-component/Router";
import BtnStyle from "../assets/btn-style";
const About: React.FC = () => {
  const routerContext = useContext(RouterContext);

  const handleClick = () => {
    routerContext?.push("/");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <h1>This is the About Page</h1>
      <BtnStyle>
        <button onClick={handleClick}>Go Main</button>
        <button onClick={handleGoBack}>Go Back</button>
      </BtnStyle>
    </>
  );
};

export default About;
