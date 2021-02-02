import React from "react";
import renderer from "react-test-renderer";
import Paginate from "../components/Paginate/Paginate";

describe("Paginate", () => {
  it("renders Pagination display correctly", () => {
    const tree = renderer
      .create(
        <Paginate
          currentPage={1}
          itemsPerPage={50}
          totalItems={100}
          pageSelected={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
