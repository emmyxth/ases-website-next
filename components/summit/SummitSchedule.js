import React from "react";

export default function SummitSchedule() {
  return (
    <div className="bg-white desktop:p-24 mobile:px-4 mobile:py-8" style={{ borderBottom: "1px solid black" }}>
      <div className="max-w-[1280px] mx-auto">
        <h2
          className="text-[#4470B6] text-center mb-6 mobile:mb-4"
          style={{
            fontSize: "calc(20px + 3vmin)",
            fontWeight: "500",
          }}
        >
          Summit Schedule
        </h2>
        <img src="/summit_schedule.png" alt="Summit Calendar" className="w-full h-auto" />
      </div>
    </div>
  );
}