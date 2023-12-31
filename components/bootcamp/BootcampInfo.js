import ZeroToOne from "./ZeroToOne";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function BootcampInfo() {
  return (
    <div
      className="w-full bg-[#FCFAFF] flex mobile:flex-col-reverse desktop:flex-row desktop:justify-around mobile:justify-center"
      style={{ borderBottom: "1px solid black" }}
    >
      <div className="relative">
        <Typography
          className="text-[#667085] desktop:p-24 mobile:p-10"
          sx={{
            fontSize: "calc(10px + 1.5vmin)",
            fontWeight: "300",
          }}
        >
          ASES Bootcamp is a 12-week design-thinking intensive for Stanford
          freshmen and sophomores that serves as a stepping stone into the world
          of entrepreneurship. Following an innovative, action-oriented process,
          students will learn to identify and prototype impactful solutions to
          problems they’re interested in tackling. Bootcamp culminates in a
          final pitch presentation, in which teams of students pitch their
          startup ideas to a panel of Silicon Valley investors. This is your
          chance to join Stanford’s closest-knit startup community!
        </Typography>
        <img src="/bootcamp-info.jpg" className="desktop:w-2/3" />
      </div>
      <ZeroToOne />
    </div>
  );
}
