import {Fragment} from "react";
export const Image = ({src, alt, srcset, clName, fn}) => (
  <Fragment>
    <img
      src={src}
      alt={alt}
      srcSet={srcset}
      className={clName}
      onClick={fn}
    />
  </Fragment>
);
