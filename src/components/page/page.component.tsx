import React from "react";
import Body from "../body/body.component";
import Title from "../title/title.component";
import { ContentContainer } from "./page.styles";

interface PageProps {
  title: string;
  content: string[];
}

const Page: React.FC<PageProps> = ({ title, content }) => {
  return (
    <ContentContainer>
      <Title>{title}</Title>
      <Body content={content}></Body>
    </ContentContainer>
  );
};

export default Page;
