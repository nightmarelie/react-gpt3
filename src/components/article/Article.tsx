import React, { FC } from "react";
import "./styles.css";

type Props = {
  imgUrl: string;
  date: string;
  text: string;
};

export const Article: FC<Props> = ({ imgUrl, date, text }) => {
  return <div>Article</div>;
};
