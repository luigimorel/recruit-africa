import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

test("should render connect with us text", () => {
  render(<Footer />);
  const connectText = screen.getByText(/Connect with us/i);
  expect(connectText).toBeInTheDocument();
});
