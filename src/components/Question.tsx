import React from "react";

export default function Question({ children }) {
  return (
    <details>
      <summary>{children}</summary>
      <p>
        Epcot is a theme park at Walt Disney World Resort featuring exciting
        attractions, international pavilions, award-winning fireworks and
        seasonal special events.
      </p>
    </details>
  );
}
