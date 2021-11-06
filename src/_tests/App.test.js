import { render, screen } from "@testing-library/react";
import App from "../App";

test(" render landing page component", () => {
  render(<App />);
  const text = screen.getByText(/latest jobs/i);
  expect(text).toBeInTheDocument();
});

test("render find jobs component", () => {
  render(<App />);
  const findJobsText = screen.getByText(/create my resume/i);
  expect(findJobsText).toBeInTheDocument();
});
