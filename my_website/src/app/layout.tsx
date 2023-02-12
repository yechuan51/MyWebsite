import "styles/global.css";
import React from "react";
import { NextPage } from "next";
import NavBarComp from "@/components/main_nav_bar/navBar";

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
