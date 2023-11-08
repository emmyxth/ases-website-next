import TimelineComponent from "./TimelineComponent";
import timelineData from "@/public/textContent/homeTimeline.json";
import styles from "./stylesTimeline.module.css";

export default function Timeline() {
  return (
    <>
      {/* <a suppressHydrationWarning> */}
      <div
        className={styles.backgroundContainer}
        style={{
          padding: "4rem",
          backgroundColor: "white",
          "@media (maxWidth: 800px)": {
            padding: "2rem",
          },
        }}
      >
        <div className="pt-4 justify-start" style={{ textAlign: "left" }}>
          <a id="programs">
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
          </a>
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
      {/* </a> */}
    </>
  );
}
