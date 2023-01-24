import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type RouterContextType = {
  push: (path: string) => void;
};

export const RouterContext = createContext<RouterContextType | undefined>(
  undefined
);

type RouterProps = {
  children: ReactNode;
};

const Router: React.FC<RouterProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopstate = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const push = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return (
    <RouterContext.Provider value={{ push }}>{children}</RouterContext.Provider>
  );
};

export default Router;
