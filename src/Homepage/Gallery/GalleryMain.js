import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
  fetched_data,
  fetched_error,
  fetch_files,
} from "./../../Redux/actions/actions";
import "./gallery.scss";
/* prettier-ignore */
/* eslint-disable */

const Gallery = ({
  status,
  data,
  fetched_data,
  fetched_error,
  fetch_files,
}) => {
  useEffect(() => {
    if (true) {
      fetch_files(fetched_data, fetched_error, {
        method: 'get',
        url:
          'https://storage.bunnycdn.com/dkdevappointment/',
        headers: {
          'AccessKey':
            '0fe84002-e413-4668-8c1ab4e1905b-e4c7-4ede',
        },
      });
    }
  }, []);
  return (
    <section className="gallery">
      {console.log(data)}
    </section>
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
