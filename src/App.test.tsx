import { fireEvent, render, screen, within } from "@testing-library/react";
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
    expect(screen.getByRole("link", { name: /call pooja/i })).toHaveAttribute(
      "href",
      "tel:+919689955894",
    );
    const telLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href")?.startsWith("tel:"));
    expect(telLinks).toHaveLength(1);
    expect(screen.getByRole("link", { name: "LeetCode" })).toHaveAttribute(
      "href",
      "https://leetcode.com/u/poojadonode31/",
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
    expect(screen.getByRole("link", { name: "PopcornTime" })).toHaveAttribute(
      "href",
      "https://github.com/poojadonode28/PopcornTime1",
    );
    expect(
      screen.getByRole("heading", { name: "E-Commerce Platform" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "E-Commerce Platform" })).toHaveAttribute(
      "href",
      "https://github.com/poojadonode28/ecommerce",
    );
    expect(screen.getByText(/5\+ years of experience/i)).toBeInTheDocument();
    expect(screen.getByText(/currently working at/i)).toBeInTheDocument();
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

  it("moves focus into the mobile navigation when it opens", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /open navigation/i }));

    const mobileNavigation = document.querySelector("#mobile-navigation");
    expect(mobileNavigation).not.toBeNull();
    expect(
      within(mobileNavigation as HTMLElement).getByRole("link", { name: "About" }),
    ).toHaveFocus();
  });

  it("closes the mobile navigation with Escape and restores focus", () => {
    render(<App />);

    const menuButton = screen.getByRole("button", { name: /open navigation/i });
    fireEvent.click(menuButton);
    fireEvent.keyDown(document.querySelector("#mobile-navigation") as HTMLElement, {
      key: "Escape",
    });

    expect(menuButton).toHaveFocus();
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  it("keeps Tab focus within the open mobile navigation", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /open navigation/i }));
    const mobileNavigation = document.querySelector("#mobile-navigation") as HTMLElement;
    const links = within(mobileNavigation).getAllByRole("link");

    links.at(-1)?.focus();
    fireEvent.keyDown(mobileNavigation, { key: "Tab" });
    expect(links[0]).toHaveFocus();

    links[0].focus();
    fireEvent.keyDown(mobileNavigation, { key: "Tab", shiftKey: true });
    expect(links.at(-1)).toHaveFocus();
  });
});
