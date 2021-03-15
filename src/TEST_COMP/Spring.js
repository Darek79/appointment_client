import React, {useEffect, useState} from "react";
import "./price.scss";
import {
  useTrail,
  animated as a,
} from "react-spring";
const Txt = ({txt}) => <div>{txt}</div>;
const text = ["MENU", "ABOUT", "HELP"];
const Trail = ({open}) => {
  useEffect(() => {
    console.log(open);
  });
  const trail = useTrail(text.length, {
    config: {
      mass: 5,
      tension: 1000,
      friction: 200,
      duration: 1000,
    },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: {opacity: 0, x: 20, height: 0},
  });
  useEffect(() => {}, []);
  return (
    <section className="trails-main">
      {console.log(open)}
      {trail.map(
        ({x, height, ...rest}, index) => (
          <a.div
            className="trails-text"
            key={text[index]}
            style={{
              ...rest,
              transform: x.interpolate(
                (x) => `translate3d(0,${x}px,0)`
              ),
            }}>
            <a.div style={{height}}>
              <Txt txt={text[index]} />
            </a.div>
          </a.div>
        )
      )}
    </section>
  );
};
export const Div = ({txt}) => {
  const [open, set] = useState(false);
  return (
    <span onClick={() => set((p) => !p)}>
      <Trail open={open} />
    </span>
  );
};
{
  /* <table>
      <thead className="price_head">
        <tr>
          <th>CUT</th>
          <th>STYLIST</th>
          <th>TOP STYLIST</th>
          <th>STYLE DIRECTOR</th>
          <th>ART DIRECTOR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CUT &amp; BLOWDRY</td>
          <td>$95</td>
          <td>$110</td>
          <td>$125</td>
          <td>$140</td>
        </tr>
        <tr>
          <td>BLOWDRY</td>
          <td>$80</td>
          <td>$80</td>
          <td>$80</td>
          <td>$80</td>
        </tr>
        <tr>
          <td>COLOUR</td>
          <td>TECHNICIAN</td>
          <td>SENIOR TECHNICIAN</td>
          <td>HEAD TECHNICIAN</td>
          <td>TECHNICAL DIRECTOR</td>
        </tr>
        <tr>
          <td>HALF HEAD HIGHLIGHTS</td>
          <td>$190</td>
          <td>$210</td>
          <td>$235</td>
          <td>$245</td>
        </tr>
        <tr>
          <td>FULL HEAD HIGHLIGHTS</td>
          <td>$260</td>
          <td>$280</td>
          <td>$315</td>
          <td>$330</td>
        </tr>
        <tr>
          <td>BALAYAGE(FROM)</td>
          <td>$POA</td>
          <td>$POA</td>
          <td>$POA</td>
          <td>$POA</td>
        </tr>
        <tr>
          <td>TONER(FROM)</td>
          <td>$40</td>
          <td>$40</td>
          <td>$40</td>
          <td>$40</td>
        </tr>
        <tr>
          <td>SEMI PERMANENT(FROM)</td>
          <td>$175</td>
          <td>$175</td>
          <td>$175</td>
          <td>$175</td>
        </tr>
        <tr>
          <td>TINT</td>
          <td>$145</td>
          <td>$145</td>
          <td>$145</td>
          <td>$145</td>
        </tr>
        <tr>
          <td>
            ALL OTHER COLOUR SPECIALTY SERVICES
          </td>
          <td>$POA</td>
          <td>$POA</td>
          <td>$POA</td>
          <td>$POA</td>
        </tr>
        <tr>
          <td>WELLAPLEX(FROM)</td>
          <td>$50</td>
          <td>$50</td>
          <td>$50</td>
          <td>$50</td>
        </tr>
      </tbody>
    </table> */
}
