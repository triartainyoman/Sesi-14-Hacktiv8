import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./pages/Home";
import "@testing-library/jest-dom";

test("Render halaman dengan benar", () => {
  const app = render(<Home />);

  // app.getAllByText();

  // Mencari teks tertentu
  const title = screen.getByText(/why do we need test ?/i);
  expect(title).toBeInTheDocument();

  // Mencari button tertentu
  // pastika button tidak memiliki role="button"
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Users List");

  // Klik button Users List
  fireEvent.click(btn);

  // Mencari tombol tertentu
  // Pada halaman yang muncul karena klik tombol
  // Pastikan button kita memiliki role="button"
  const btn2 = screen.getByRole("button");
  expect(btn2).toBeInTheDocument();
  // expect(btn2).toHaveTextContent("Back to Home");
});
