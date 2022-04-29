import { render, screen } from "@testing-library/react";
import Users from "./pages/Users";

test("Render halaman Users dengan benar", () => {
  render(<Users />);

  // Mencari tombol tertentu
  // Pastikan button kita memiliki role button
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Back to Home");
});
