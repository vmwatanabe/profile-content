import React from "react";
import { TitleContainer } from "./title.styles";

const Title: React.FC = ({ children }) => {
  return <TitleContainer data-testid="title">{children}</TitleContainer>;
};

export default Title;
