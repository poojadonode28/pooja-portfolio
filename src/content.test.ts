import { describe, expect, it } from "vitest";
import { experience, profile, projects } from "./content";

describe("portfolio content", () => {
  it("identifies Pooja and provides a direct contact route", () => {
    expect(profile).toMatchObject({
      name: "Pooja Donode",
      email: "poojadonode36921@gmail.com",
      role: "Software Engineer",
    });
  });

  it("presents the four resume roles in reverse chronological order", () => {
    expect(experience).toHaveLength(4);
    expect(experience.map((role) => role.company)).toEqual([
      "JFrog",
      "VidyutTech",
      "Tekion",
      "Cognizant",
    ]);
    expect(experience.map((role) => role.url)).toEqual([
      "https://jfrog.com",
      "https://www.vidyuttech.com",
      "https://www.tekion.com",
      "https://www.cognizant.com",
    ]);
  });

  it("includes both portfolio-ready resume projects", () => {
    expect(projects.map((project) => project.title)).toEqual([
      "PopcornTime",
      "E-Commerce Platform",
    ]);
  });
});
