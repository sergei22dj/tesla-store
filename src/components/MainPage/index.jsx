import React from "react";
// components
import Catalog from "./Catalog";
import Comments from "./Commets";
import Feedback from "./Feedback";
import Footer from "./Footer";
import MainScreen from "./MainScreen";
import News from "./News";
import Spares from "./Spares";

const MainPage = () => {
  return (
    <>
      <MainScreen />
      <Catalog />
      <Comments />
      <Feedback />
      <Spares />
      <News />
      <Footer />
    </>
  );
};
export default MainPage;
