import { render, screen } from "@testing-library/react";
import AvailableJobs from "../../components/AvailableJobs";

test("should render a send a link button", () => {
  render(<AvailableJobs />);
  const buttonElement = screen.getByText(/find a job/i);
  expect(buttonElement).toBeInTheDocument();
});

test("should show dream job text    ", () => {
  render(<AvailableJobs />);
  const dreamText = screen.getByText(/dream job/i);
  expect(dreamText).toBeInTheDocument();
});
