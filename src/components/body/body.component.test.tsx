import React from "react";
import { getByTestId, render } from "@testing-library/react";
import Body from "./body.component";

describe("content", () => {
  it("renders zero paragraphs", () => {
    const { getAllByTestId } = render(<Body content={[]} />);

    let couldNotRender = false;
    try {
      getAllByTestId("paragraph");
    } catch (e) {
      couldNotRender = true;
    }

    if (!couldNotRender) throw new Error();
  });

  it("renders every paragraph", () => {
    const content = ["1", "2"];
    const { getAllByTestId } = render(<Body content={content} />);
    expect(getAllByTestId("paragraph")).toHaveLength(2);
  });
});
