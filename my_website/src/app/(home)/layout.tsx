import "styles/global.css";
import { NextPage } from "next";
import React, { Fragment } from "react";
import NavBarComp from "@/components/main_nav_bar/navBar";

type LayoutPropsType = {
  children: React.ReactNode;
};

const Layout: NextPage<LayoutPropsType> = (props) => {
  return (
    <div>
      <header>
        <NavBarComp />
      </header>
      {props.children}
    </div>
  );
};

export default Layout;