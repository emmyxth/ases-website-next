"use client";

import TimelineComponent from "./TimelineComponent";
import timelineData from "@/public/textContent/homeTimeline.json";
import { motion, useScroll } from "framer-motion";
import "./stylesTimeline.css";

export default function Timeline() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <a id="programs">
        <div
          class="background-container bg-white"
          style={{
            padding: "4rem",
            "@media (max-width: 800px)": {
              padding: "2rem",
            },
          }}
        >
          <div
            className="pt-4 justify-start"
            style={{ fontFamily: "Space Grotesk", textAlign: "left" }}
          >
            <h1
              style={{
                fontSize: "calc(30px + 3vmin)",
                fontWeight: "500",
                textAlign: "left",
              }}
            >
              Our Programs
            </h1>
            <h3 style={{ fontSize: "calc(16px + 1vmin)", textAlign: "left" }}>
              What does a year for ASES look like?
            </h3>
          </div>

          <div className="d-flex flex-column justify-between ">
            <>
              {timelineData.map((d) => {
                return (
                  <TimelineComponent
                    header={d.header}
                    description={d.description}
                    image={d.image}
                    timeframe={d.timeframe}
                    link={d.link}
                  />
                );
              })}
            </>
          </div>
        </div>
      </a>
    </>
  );
}
