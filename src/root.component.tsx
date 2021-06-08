import React, { useCallback, useEffect, useState } from "react";
import { getFileName } from "./root.helpers";
import Page from "./components/page/page.component";
import { ContentContainer } from "./root.styles";

const route =
  process.env.NODE_ENV === "production"
    ? "https:/watanabethedev.com"
    : "https://s3.amazonaws.com/watanabethedev.com";

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
        `${route}/pages/${getFileName(pathname)}.json`
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
