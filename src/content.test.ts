import { describe, expect, it } from "vitest";
import { experience, profile, projects } from "./content";

describe("portfolio content", () => {
  it("identifies Pooja and provides a direct contact route", () => {
    expect(profile).toMatchObject({
      name: "Pooja Donode",
      email: "poojadonode36921@gmail.com",
      role: "Software Engineer",
      summary:
        "Building scalable systems and thoughtful product experiences with Java, Spring Boot, Vue, React, and TypeScript.",
      leetcode: "https://leetcode.com/u/poojadonode31/",
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
    expect(projects[0].url).toBe("https://github.com/poojadonode28/PopcornTime1");
    expect(projects[1].url).toBe("https://github.com/poojadonode28/ecommerce");
  });
});
