import React from "react";

const arr = [
  [
    {d: 1, v: "APP"},
    {d: 1, v: "APP"},
    {d: 1, v: "APP"},
    {d: 1, v: "APP"},
    {d: 1, v: "APP"},
    {d: 1, v: "APP"},
  ],
  [
    {d: 2, v: "APP1"},
    {d: 2, v: "APP1"},
    {d: 2, v: "APP1"},
    {d: 2, v: "APP1"},
    {d: 2, v: "APP1"},
    {d: 2, v: "APP1"},
  ],
];

export const Week = () => {
  return (
    <section
      style={{
        marginLeft: "50px",
        width: "500px",
        height: "200px",
        display: "flex",
      }}>
      {arr.map((el, i) => {
        console.log(el[0].v);
        return (
          <table style={{width: "100%"}}>
            <thead>
              <tr>
                <th scope="col">{el[0].v}</th>
              </tr>
            </thead>
            <tbody>
              {el.map((el) => (
                <tr>
                  <td scope="row">{el.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      })}
    </section>
  );
};
