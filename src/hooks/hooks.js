/* eslint-disable */
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

export const IsInViewportHook = (
  offset = 0,
  el,
  side
) => {
  if (!el) return false;

  const [visible, setVisible] = useState(false);
  const galleryRef = useRef(0);
  const isInViewport = (offset = 0, elem) => {
    const top = elem.getBoundingClientRect().top;

    return {
      top: top - offset,
      bottom: top + offset + window.innerHeight,
    };
  };

  const cb = useCallback(() => {
    const res = isInViewport(500, el.current);
    if (
      (side === "bottom" ? res.bottom : res.top) <
        0 &&
      galleryRef.current === 0
    ) {
      console.log("fire", galleryRef.current);
      setVisible(true);
      galleryRef.current = 1;
    }
  }, [visible]);
  useEffect(() => {
    console.log("RUNNING");
    window.addEventListener("scroll", cb);
    galleryRef.current === 0;
    return () =>
      window.removeEventListener("scroll", cb);
  }, [cb]);

  return visible;
};
