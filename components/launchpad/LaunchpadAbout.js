import { Typography } from "@mui/material";

export default function LaunchpadAbout() {
  return (
    <div
      className="w-full bg-[#FCFAFF] flex flex-col justify-center items-center p-12 gap-y-8"
      style={{ borderBottom: "1px solid black" }}
    >
      <div className="max-w-[1280px] mx-auto w-full">
        <h2
          style={{
            fontSize: "calc(24px + 4vmin)",
            fontWeight: "500",
            color: "#4470B6",
            textAlign: "center",
          }}
        >
          This year, <span className="text-accent">Launchpad</span> is about
          <br />
          aiming for the <span className="text-accent">Moon</span>.
        </h2>
        <Typography
          className="text-center max-w-3xl mx-auto"
          sx={{
            fontSize: "calc(10px + 1.5vmin)",
            fontWeight: "300",
          }}
        >
          ASES Launchpad is a <strong>two-day</strong> event for high school students across the country to explore the fundamentals of entrepreneurship. This year, our in-person program explores the <strong>Moonshot theme</strong> of aiming for solutions that revolutionize a field. In teams, you will create socially impactful ideas that disrupt the industry by providing values that add to humanity.
        </Typography>
        <Typography
          className="text-center max-w-3xl mx-auto"
          sx={{
            fontSize: "calc(10px + 1.5vmin)",
            fontWeight: "300",
          }}
        >
          We at ASES believe that any individual can make a positive impact through entrepreneurship. Launchpad is <strong>completely free</strong> for participants and no prior experience is required — in fact, we especially encourage those without any entrepreneurship experience and those historically underrepresented in tech to apply!
        </Typography>
      </div>
    </div>
  );
}