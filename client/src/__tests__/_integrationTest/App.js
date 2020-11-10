import React from "react";
import { render } from "@testing-library/react";
import App from "../../App";
import Navbar from "../../components/layout/Navbar";

test("renders the component correctly - header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Find Your Ideal Home");
  expect(linkElement).toBeInTheDocument();
});

test("renders the component correctly - content", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(
    "Use House Matcher's property recommendation tool to search for a suitable resale HBD"
  );
  expect(linkElement).toBeInTheDocument();
});
