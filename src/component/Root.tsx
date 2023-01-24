import React, { useContext } from "react";
import { RouterContext } from "../router-component/Router";
import BtnStyle from "../assets/btn-style";

const Root: React.FC = () => {
  const routerContext = useContext(RouterContext);

  const handleClick = () => {
    routerContext?.push("/about");
  };

  return (
    <>
      <h1>This is the Root Page</h1>
      <BtnStyle>
        <button onClick={handleClick}>Go About</button>
      </BtnStyle>
    </>
  );
};

export default Root;
