import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("should pass snapshot test", () => {
  const component = render.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
