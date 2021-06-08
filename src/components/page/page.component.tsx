import React from "react";
import Body from "../body/body.component";
import Title from "../title/title.component";
import { PageContainer } from "./page.styles";

interface PageProps {
  title: string;
  content: string[];
}

const Page: React.FC<PageProps> = ({ title, content }) => {
  return (
    <PageContainer>
      <Title>{title}</Title>
      <Body content={content}></Body>
    </PageContainer>
  );
};

export default Page;
