import React, { useCallback, useEffect, useMemo, useState } from "react";
import Page from "./components/page/page.component";
import Loading from "./components/loading/loading.component";
import { getFileName } from "./root.helpers";
import { ContentContainer } from "./root.styles";
import { route } from "./config";

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

  const content = useMemo(() => {
    if (!pageData) return <Loading />;
    return <Page title={pageData?.title} content={pageData.content} />;
  }, [pageData]);

  return <ContentContainer>{content}</ContentContainer>;
};
export default Root;
