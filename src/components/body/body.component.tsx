import React, { useMemo } from "react";
import { BodyContainer, Paragraph } from "./body.styles";

interface BodyProps {
  content: string[];
}

const Body: React.FC<BodyProps> = ({ content }) => {
  const paragraphs = useMemo(() => {
    if (!content?.length) return null;

    return content.map((elem, index) => (
      <Paragraph data-testid="paragraph" key={index}>
        {elem}
      </Paragraph>
    ));
  }, []);

  return <BodyContainer data-testid="body">{paragraphs}</BodyContainer>;
};

export default Body;
