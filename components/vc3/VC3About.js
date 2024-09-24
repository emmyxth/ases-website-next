import { Typography } from "@mui/material";

export default function VC3About() {
  return (
    <div
      className="w-full bg-[#FCFAFF] flex flex-col justify-center items-center p-12 gap-y-8"
      style={{ borderBottom: "1px solid black" }}
    >
      <h2
        style={{
          fontSize: "calc(24px + 4vmin)",
          fontWeight: "500",
          color: "#4470B6",
        }}
      >
        About
      </h2>
      <Typography
        className="text-center max-w-3xl"
        sx={{
          fontSize: "calc(10px + 1.5vmin)",
          fontWeight: "300",
        }}
      >
        ASES's mission is to solve global problems. With VC3, we connect the Valley's most prominent venture capitalists with Stanford's most promising startups taking on the world's hardest problems.
      </Typography>
      <div className="flex desktop:flex-row mobile:flex-col justify-around w-full mt-8">
        {[
          { number: "30", text: "Stanford entrepreneurs" },
          { number: "15", text: "investors" },
          { number: "4", text: "hours on March 3, 2019" },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <h3 style={{ fontSize: "calc(24px + 2vmin)", fontWeight: "bold", color: "#A04D4E" }}>
              {item.number}
            </h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}