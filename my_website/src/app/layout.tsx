import "styles/global.css";
import React from "react";
import { NextPage } from "next";

type RootLayoutPropsType = {
  children: React.ReactNode;
};

const RootLayout: NextPage<RootLayoutPropsType> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
