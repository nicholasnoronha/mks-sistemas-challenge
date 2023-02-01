import React from "react";

import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../utils/utils-for-tests";

import Home from "../../src/pages";

const homePageWithProviders = () => {
  return renderWithProviders(
    <Home
      products={[
        {
          id: 1,
          name: "Test name",
          description: "test description",
          brand: "test brand",
          photo: "test photo",
          price: "test price",
          createdAt: "test createdAt",
          updatedAt: "test updatedAt",
        },
      ]}
    />
  );
};

describe("Home page", () => {
  test("render props and redux store", () => {
    homePageWithProviders();
    const linkElement = screen.getByText(/test name/i);

    expect(linkElement).toBeInTheDocument();
  });

  test("change cart amount with buy button click", () => {
    homePageWithProviders();
    const button = screen.getByText("COMPRAR");

    const cartElement = screen.getByText("0").innerHTML;
    expect(cartElement).toBe("0");

    fireEvent.click(button);

    const updatedCartElement = screen.getByText("1").innerHTML;
    expect(updatedCartElement).toBe("1");
  });
});
