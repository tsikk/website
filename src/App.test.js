import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  window.history.pushState({}, "Test", "/");
});

test("renders the professional home page without IP reservations or direct contact details", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: "Trent Sikkema" })).toBeInTheDocument();
  expect(screen.getAllByText("Platform Engineer").length).toBeGreaterThan(0);
  expect(screen.getAllByText(/pella, iowa/i).length).toBeGreaterThan(0);
  expect(screen.queryByText(/ip reservations/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/tsikkema@gmail\.com/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/641-780-3293/)).not.toBeInTheDocument();
  expect(document.querySelector("a[href^='mailto:']")).toBeNull();
  expect(document.querySelector("a[href^='tel:']")).toBeNull();
  expect(screen.getAllByRole("link", { name: "Resume" })[0]).toHaveAttribute("href", "/resume");
});

test("resume page hosts a formatted resume without email or phone", async () => {
  render(<App />);

  await userEvent.click(screen.getByRole("link", { name: "View resume" }));

  expect(screen.getByRole("article", { name: "Resume" })).toBeInTheDocument();
  expect(screen.getByText(/b\.s\. in management information systems/i)).toBeInTheDocument();
  expect(screen.queryByText(/tsikkema@gmail\.com/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/641-780-3293/)).not.toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "Download PDF" })).not.toBeInTheDocument();
});

test("unknown routes show a not-found page", () => {
  window.history.pushState({}, "Test", "/does-not-exist");
  render(<App />);
  expect(screen.getByRole("heading", { name: "Page not found" })).toBeInTheDocument();
});
