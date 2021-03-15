import React, {
  useEffect,
  useState,
  Fragment,
  useRef,
  useCallback,
} from "react";
import {connect} from "react-redux";
import {
  fetched_data,
  fetched_error,
  fetch_files,
} from "./../../Redux/actions/actions";
import {IsInViewportHook} from "./../../hooks/hooks";
import "./gallery.scss";
/* prettier-ignore */
/* eslint-disable */

import img1 from "./../../assets/gallery/171088547-480x480.jpg"
import img2 from "./../../assets/gallery/173445464-480x480.jpg";
import img3 from "./../../assets/gallery/185720033-480x480.jpg";
import img4 from "./../../assets/gallery/gallery1-480x480.jpg";
import img5 from "./../../assets/gallery/gallery10-480x480.jpg";
import img6 from "./../../assets/gallery/gallery11-480x480.jpg";
import img7 from "./../../assets/gallery/gallery12-480x480.jpg";
import img8 from "./../../assets/gallery/gallery14-480x480.jpg";
import img9 from "./../../assets/gallery/gallery15-480x480.jpg";
import img10 from "./../../assets/gallery/gallery16-480x480.jpg";
import img11 from "./../../assets/gallery/gallery17-480x480.jpg";
import img12 from "./../../assets/gallery/gallery18-480x480.jpg";
import img13 from "./../../assets/gallery/gallery19-480x480.jpg";
import img14 from "./../../assets/gallery/gallery20-480x480.jpg";
import img15 from "./../../assets/gallery/gallery4-480x480.jpg";
import img16 from "./../../assets/gallery/gallery6-480x480.jpg";
import img17 from "./../../assets/gallery/gallery7-480x480.jpg";
import img18 from "./../../assets/gallery/gallery8-480x480.jpg";
import img19 from "./../../assets/gallery/gallery9-480x480.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
];

const Gallery = ({
  status,
  data,
  fetched_data,
  fetched_error,
  fetch_files,
}) => {
  const img_gallery = useRef(null);

  const visible = IsInViewportHook(
    1000,
    img_gallery
  );
  // useEffect(() => {
  //   if (data.length === 0) {
  //     fetch_files(fetched_data, fetched_error);
  //   }
  // }, []);

  useEffect(() => {
    if (visible) {
      console.log("loading...");
    }
  }, []);

  return (
    <Fragment>
      <span ref={img_gallery}>
        {visible ? (
          <section
            className={`gallery ${
              visible ? "gallery_visible" : ""
            }`}>
            {images.map((el, i) => (
              <div
                className={`gallery_img `}
                key={el + i}>
                <div
                  className={`gallery_inner_img`}
                  style={{
                    backgroundImage: `url(${el})`,
                  }}
                />
              </div>
            ))}
          </section>
        ) : undefined}
      </span>
    </Fragment>
  );
};
const storage = ({gallery}) => ({
  data: gallery.data,
  status: gallery.status,
});

export default connect(storage, {
  fetched_data,
  fetched_error,
  fetch_files,
})(Gallery);

// {
//   method: "get",
//   url:
//     "https://storage.bunnycdn.com/dkdevappointment/",
//   headers: {
//     "AccessKey":
//       "0fe84002-e413-4668-8c1ab4e1905b-e4c7-4ede",
//   }
//backgroundImage: `url(http://dkdev.b-cdn.net/${el})`,

// const cb = useCallback(() => {
//   const res = isInViewport(
//     500,
//     img_gallery.current
//   );
//   if (res.top < 0 && galleryRef.current === 0) {
//     console.log("fire", galleryRef.current);
//     setVisible(true);
//     galleryRef.current = 1;
//   }
// }, [visible]);

// useEffect(() => {
//   if (data.length === 0) {
//     fetch_files(fetched_data, fetched_error);
//   }
// }, []);

// function isInViewport(offset = 0, elem) {
//   if (!elem) return false;
//   const top = elem.getBoundingClientRect().top;
//   return (
//     top + offset >= 0 &&
//     top - offset <= window.innerHeight
//   );
// }

// const scroll = (e) => {
//   // const x = isInViewport(
//   //   500,
//   //   img_gallery.current
//   // );
//   // console.log(x);
//   const top = img_gallery.current.getBoundingClientRect()
//     .top;
//   console.log(top + 500 + window.innerHeight);
//   // const bottom = (top - 500)< 0?
//   console.log([top - 500]);
// };
// useEffect(() => {
//   console.log("RUNNING");
//   window.addEventListener("scroll", cb);
//   galleryRef.current === 0;
//   return () =>
//     window.removeEventListener("scroll", cb);
// }, [cb]);
