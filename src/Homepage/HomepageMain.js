import React, {Fragment} from "react";
import {Header} from "./HeaderSub/HeaderMain";
import {Content1} from "./Content1/ContentMain";
import Gallery from "./Gallery/GalleryMain";
import Team from "./Team/TeamMain";
export const HomepageMain = () => {
  return (
    <Fragment>
      <Header />
      <Content1 />
      <Gallery />
      <Team />
      <div style={{height: "100vh"}}></div>
    </Fragment>
  );
};
