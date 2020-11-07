import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders the component correctly - header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Find your ideal home");
  expect(linkElement).toBeInTheDocument();
});

test("renders the component correctly - content", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(
    "Use House Matcher's property recommendation tool to search for a suitable resale HDB"
  );
  expect(linkElement).toBeInTheDocument();
});
