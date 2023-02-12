import { NextPage } from "next";
import { Fragment } from "react";
import NavBarComp from "@/components/main_nav_bar/navBar";

const getCurrentDate = () => {
  return new Date();
};

const MainHomePage: NextPage = () => {
  const currentDate = getCurrentDate().toLocaleDateString();
  return (
      <div>
        <main>
          <p>Today's date is {currentDate}</p>
        </main>
      </div>
  );
};

export default MainHomePage;
