import React from "react";
import { LoadingContainer } from "./loading.styles";

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <span className="material-icons material-icons-outlined">loop</span>
    </LoadingContainer>
  );
};

export default Loading;
