import React, {Fragment} from "react";

export const TextCont = ({
  title,
  content,
  clTextCon,
  clTextCon_header,
  clTextCon_content,
}) => (
  <section className={clTextCon}>
    <h2 className={clTextCon_header}>{title}</h2>
    <p className={clTextCon_content}>{content}</p>
  </section>
);
