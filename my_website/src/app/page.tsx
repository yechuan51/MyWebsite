import styles from "./page.module.css";
import {NextPage} from "next";
import MainHomePage from "@/app/main_home/page";

// This is the page for the main home. Navigation and other common components will be here.

const HomePage: NextPage = () => {
  return <MainHomePage/>
}

export default HomePage;