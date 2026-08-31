import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("portfolio page", () => {
  it("renders recruiter-focused navigation and resume actions", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: /pooja donode/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /download résumé/i })).toHaveAttribute(
      "href",
      "/pooja-donode-resume.pdf",
    );
    expect(screen.getByRole("link", { name: /email pooja/i })).toHaveAttribute(
      "href",
      "mailto:poojadonode36921@gmail.com",
    );
  });

  it("exposes the core work history and project case studies", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: "JFrog" })).toHaveAttribute(
      "href",
      "https://jfrog.com",
    );
    expect(screen.getByRole("link", { name: "VidyutTech" })).toHaveAttribute(
      "href",
      "https://www.vidyuttech.com",
    );
    expect(screen.getByRole("heading", { name: "PopcornTime" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "E-Commerce Platform" }),
    ).toBeInTheDocument();
  });

  it("toggles the mobile navigation with an announced state", () => {
    render(<App />);

    const menuButton = screen.getByRole("button", { name: /open navigation/i });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(menuButton);

    expect(
      screen.getByRole("button", { name: /close navigation/i }),
    ).toHaveAttribute("aria-expanded", "true");
  });
});
