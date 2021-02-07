import {useState, useEffect} from "react";

// // export const isMobile = () => {
// //   var match = window.matchMedia || window.msMatchMedia;
// //   if (match) {
// //     var mq = match("(pointer:coarse)");
// //     return mq.matches;
// //   }
// //   return false;
// // };

const useWindowsWidth = () => {
  const [mobile, setMobile] = useState(false);

  let resize = () => {
    setMobile(window.innerWidth < 500);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () =>
      window.removeEventListener("resize", resize);
  }, []);

  return mobile;
};
export default useWindowsWidth;

// const useWindowsWidth = () => {
//   const [isScreenSmall, setIsScreenSmall] = useState(false);

//   let checkScreenSize = () => {
//     setIsScreenSmall(window.innerWidth < 600);
//   };
//   useEffect(() => {
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () =>
//       window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   return isScreenSmall;
// };

// export default useWindowsWidth;
