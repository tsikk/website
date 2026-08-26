import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  window.history.pushState({}, "Test", "/");
});

test("renders the professional home page without IP reservations", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: "Trent Sikkema" })).toBeInTheDocument();
  expect(screen.getAllByText("Platform Engineer").length).toBeGreaterThan(0);
  expect(screen.getAllByText(/pella, iowa/i).length).toBeGreaterThan(0);
  expect(screen.queryByText(/ip reservations/i)).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Resume PDF" })).toHaveAttribute(
    "href",
    expect.stringMatching(/\/data\/Resume\.pdf$/)
  );
});

test("resume page hosts a formatted resume and PDF download", async () => {
  render(<App />);

  await userEvent.click(screen.getByRole("link", { name: "View resume" }));

  expect(screen.getByRole("article", { name: "Resume" })).toBeInTheDocument();
  expect(screen.getByText(/b\.s\. in management information systems/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Download PDF" })).toHaveAttribute(
    "href",
    expect.stringMatching(/\/data\/Resume\.pdf$/)
  );
});

test("unknown routes show a not-found page", () => {
  window.history.pushState({}, "Test", "/does-not-exist");
  render(<App />);
  expect(screen.getByRole("heading", { name: "Page not found" })).toBeInTheDocument();
});
