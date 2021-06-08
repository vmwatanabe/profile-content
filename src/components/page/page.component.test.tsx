import React from "react";
import { render } from "@testing-library/react";
import Page from "./page.component";

const title = "title";
const content = ["content", "content"];

describe("content", () => {
  it("renders title", () => {
    const { getByTestId } = render(<Page title={title} content={content} />);
    expect(getByTestId(/title/i)).toBeInTheDocument();
  });
  it("renders body", () => {
    const { getByTestId } = render(<Page title={title} content={content} />);
    expect(getByTestId(/body/i)).toBeInTheDocument();
  });
});
