import React from "react";
import Header from "../header/Header";
import Bookshelf from "../Bookshelf/Bookshelf";

type HomeContentProps = {};

const HomeContent: React.FC<HomeContentProps> = () => {
  return (
    <div>
      <Header />
      <Bookshelf />
    </div>
  );
};
export default HomeContent;
