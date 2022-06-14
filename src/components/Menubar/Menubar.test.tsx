import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Menubar from "./Menubar";

describe("<Menubar />", () => {
  test("it should mount", () => {
    render(<Menubar />);
    
    const menubar = screen.getByTestId("Menubar");

    expect(menubar).toBeInTheDocument();
  });
});