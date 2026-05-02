/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Top 10 Skateparks in LA 🛹",
    description:
      "A guide to the best skateparks in Los Angeles, from beginner-friendly bowls to expert street courses. Updated with tips on best times to visit and local rules.",
    url: "https://www.skatela.org",
  },
  {
    title: "Kickflip Tutorial for Beginners",
    description:
      "Step-by-step video breakdown on how to land your first kickflip. Covers foot placement, pop timing, and common mistakes to avoid.",
    url: "https://www.youtube.com",
  },
  {
    title: "The Skate Life Blog",
    description:
      "Personal blog covering skate culture, gear reviews, local scene spotlights, and interviews with up-and-coming skaters from around the world.",
    url: "https://www.skateboarding.com",
  },
  {
    title: "Skate Spot Map — Hidden Gems",
    description:
      "A community-sourced map of lesser-known skate spots across the US. Discover banks, ledges, and plazas that most people walk right past.",
    url: "https://www.thrashermagazine.com",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Skate Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
