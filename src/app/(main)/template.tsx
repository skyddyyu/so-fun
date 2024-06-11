import React from "react";

const MainTemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default MainTemplate;
