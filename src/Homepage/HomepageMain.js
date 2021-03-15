import React, {Fragment, Suspense} from "react";
import {Header} from "./HeaderSub/HeaderMain";

import {Content1} from "./Content1/ContentMain";
import Gallery from "./Gallery/GalleryMain";
import Team from "./Team/TeamMain";
// const Content1 = lazy(() =>
//   import("./Content1/ContentMain")
// );
// const Gallery = React.lazy(
//   () =>
//     new Promise((resolve, reject) => {
//       setTimeout(
//         () =>
//           resolve(
//             import("./Gallery/GalleryMain")
//           ),
//         10000
//       );
//     })
// );
const HomepageMain = () => {
  return (
    <Fragment>
      <Header />
      <Content1 />
      {/* <Suspense
        fallback={() => <div>Loading...</div>}>
        <Gallery />
      </Suspense> */}
      <Gallery />
      <Team />
      <div style={{height: "100vh"}}></div>
    </Fragment>
  );
};

export default HomepageMain;
