import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/header";

describe("Header", () => {
  test("renders Header component", () => {
    render(<Header />);
    expect(screen.getByText("Comments")).toBeInTheDocument();
    expect(screen.getByText("Vote Count")).toBeInTheDocument();
    expect(screen.getByText("Up Vote")).toBeInTheDocument();
    expect(screen.getByText("News Details")).toBeInTheDocument();
  });
  test("renders App component", () => {
    render(<Header />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
