import React from "react";
import renderer from "react-test-renderer";
import EmptyState from "../components/EmptyState/EmptyState";

describe("EmptyState", () => {
  it("renders empty display correctly", () => {
    const tree = renderer.create(<EmptyState />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
