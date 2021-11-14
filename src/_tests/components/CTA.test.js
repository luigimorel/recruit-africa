import { render, screen } from "@testing-library/react";
import CTA from "../../components/CTA";

test("should render start your career text", () => {
  render(<CTA />);
  const startCareer = screen.getByText(/start your accounting career/i);
  expect(startCareer).toBeInTheDocument();
});
