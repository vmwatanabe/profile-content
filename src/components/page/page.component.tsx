import React from "react";
import Body from "../body/body.component";
import Title from "../title/title.component";
import { PageContainer, SubTitle } from "./page.styles";

interface PageProps {
  title: string;
  content: string[];
  subTitle?: string;
}

const Page: React.FC<PageProps> = ({ title, content, subTitle }) => {
  return (
    <PageContainer>
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      <Body content={content}></Body>
    </PageContainer>
  );
};

export default Page;
