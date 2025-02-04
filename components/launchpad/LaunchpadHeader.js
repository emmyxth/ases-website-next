import React from "react";
import ShortButton from "../general/ShortButton";

export default function LaunchpadHeader() {
  return (
    <div
      className="w-full desktop:pb-24 mobile:pb-8"
      style={{ borderBottom: "1px solid black" }}
    >
      <div
        className="fixed -z-10 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/launchpad_pic.png')",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay"
        }}
      />
      <div className="max-w-[1280px] mx-auto">
        <div className="flex pt-8 desktop:flex-row mobile:flex-col px-8 mobile:px-0 w-full mobile:gap-y-2 desktop:justify-around desktop:px-12 overflow-hidden">
          <div className="relative flex flex-col flex mobile:w-full desktop:w-3/5 desktop:pt-9 desktop:pl-9 desktop:items-start mobile:items-center gap-y-10 mobile:px-8 mobile:text-center desktop:text-left">
            <h1
              className="desktop:w-full"
              style={{
                fontSize: "calc(18px + 5vmin)",
                fontWeight: "500",
                lineHeight: "1.3",
                color: "white",
              }}
            >
              ASES Launchpad
            </h1>
            <p
              style={{
                fontSize: "calc(12px + 2vmin)",
                fontWeight: "light",
                color: "white",
              }}
            >
              Join us for <span className="text-accent">Launchpad 2025.</span>
              <br />
              We'll take you from idea to <span className="text-accent">launch</span>.
            </p>
            <ShortButton text={"Apply Here By March 21st"} link={"https://forms.gle/SeB5pzAWxstfsUF56"} color={"white"} />
          </div>
        </div>
      </div>
    </div>
  );
}