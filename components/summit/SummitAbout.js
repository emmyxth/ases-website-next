import { Typography } from "@mui/material";

export default function SummitAbout() {
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
          A 1-Week Immersive at Stanford.
        </h2>
        <Typography
          className="text-center max-w-3xl mx-auto"
          sx={{
            fontSize: "calc(10px + 1.5vmin)",
            fontWeight: "300",
          }}
        >
          30 international delegates. Experience the heart of Silicon Valley. Live alongside inspiring students.
        </Typography>
        <div className="video-player mt-8">
          <iframe 
            width="100%" 
            height="715" 
            src="https://www.youtube.com/embed/GIm3jZ-Ign0?si=V4KPAyv3LnrccD_2" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}