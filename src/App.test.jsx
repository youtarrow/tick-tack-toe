import { render, screen } from "@testing-library/react";
import ShoppingList from "./ShoppingList";

test("renders learn react link", () => {
  render(<ShoppingList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
