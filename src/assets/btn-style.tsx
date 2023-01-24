import React, { ReactNode } from "react";

interface ComponentProps {
  children: ReactNode;
}

const BtnStyle: React.FC<ComponentProps> = ({ children }) => {
  return <div className="btn">{children}</div>;
};
export default BtnStyle;
