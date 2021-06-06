import React from "react";
import Title from "./components/title/title.component";
import { data } from "./root.mock";
import { ContentContainer, Body } from "./root.styles";

interface RootProps {
  pathname: string;
}

const Root: React.FC<RootProps> = ({ pathname }) => {
  console.log(pathname);

  return (
    <ContentContainer>
      <Title>{data.title}</Title>
      <Body>{data.body}</Body>
    </ContentContainer>
  );
};
export default Root;
