import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.history.pushState({}, "Test", "/");
});

test("renders about and skills without resume, experience, location, or contact details", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: "Trent Sikkema" })).toBeInTheDocument();
  expect(screen.getAllByText("Platform Engineer").length).toBeGreaterThan(0);
  expect(screen.getByRole("heading", { name: "Infrastructure, then platforms" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "How I work" })).toBeInTheDocument();

  expect(screen.queryByText(/ip reservations/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/selected roles/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/pella, iowa/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/iowa state/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/tsikkema@gmail\.com/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/641-780-3293/)).not.toBeInTheDocument();
  expect(screen.queryByRole("link", { name: /resume/i })).not.toBeInTheDocument();
  expect(document.querySelector("a[href^='mailto:']")).toBeNull();
  expect(document.querySelector("a[href^='tel:']")).toBeNull();
});

test("old resume and IP reservation URLs send visitors home", () => {
  window.history.pushState({}, "Test", "/resume");
  render(<App />);
  expect(screen.getByRole("heading", { name: "Infrastructure, then platforms" })).toBeInTheDocument();
  expect(screen.queryByRole("article", { name: "Resume" })).not.toBeInTheDocument();
});

test("unknown routes show a not-found page", () => {
  window.history.pushState({}, "Test", "/does-not-exist");
  render(<App />);
  expect(screen.getByRole("heading", { name: "Page not found" })).toBeInTheDocument();
});
