import React, { FC } from "react";
import "./styles.css";

type Props = {
  title: string;
  text: string;
};

export const Feature: FC<Props> = ({ title, text }) => {
  return <div>Feature</div>;
};
