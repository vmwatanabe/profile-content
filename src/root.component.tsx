import React, { useCallback, useEffect, useState } from "react";
import Title from "./components/title/title.component";
import Body from "./components/body/body.component";
import { getFileName } from "./root.helpers";
import Page from "./components/page/page.component";
import { ContentContainer } from "./root.styles";

interface RootProps {
  pathname: string;
}

interface PageData {
  title: string;
  content: string[];
}

const Root: React.FC<RootProps> = ({ pathname }) => {
  const [pageData, setPageData] = useState<PageData>();

  const fetchPageData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://s3.amazonaws.com/watanabethedev.com/pages/${getFileName(
          pathname
        )}.json`
      );

      const json = await response.json();
      setPageData(json);
    } catch (e) {}
  }, []);

  useEffect(() => {
    fetchPageData();
  }, [fetchPageData]);

  if (!pageData) return null;

  return (
    <ContentContainer>
      <Page title={pageData?.title} content={pageData.content} />
    </ContentContainer>
  );
};
export default Root;
