import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

describe("content", () => {
  it("renders title", () => {
    const { getByTestId } = render(<Root />);
    expect(getByTestId(/title/i)).toBeInTheDocument();
  });
});
