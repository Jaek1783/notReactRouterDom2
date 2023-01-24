import React, { useContext } from "react";
import { RouterContext } from "../router-component/Router";
type RouteProps = {
  path: string;
  component: React.ReactNode;
};

const Route: React.FC<RouteProps> = ({ path, component }) => {
  const routerContext = useContext(RouterContext);

  if (window.location.pathname === path) {
    return <>{component}</>;
  }

  return null;
};

export default Route;
