import React, { FC } from "react";
import "./styles.css";

type Props = {
  title: string;
  text: string;
};

export const Feature: FC<Props> = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};
