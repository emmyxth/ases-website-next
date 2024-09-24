import React from "react";
import ShortButton from "../general/ShortButton";

export default function VC3Header() {
  return (
    <div
      className="w-full desktop:pb-24 mobile:pb-8"
      style={{ borderBottom: "1px solid black" }}
    >
      <div
        className="fixed -z-10 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/vc3_bg.png')" }}
      />
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
            ASES VC3
          </h1>
          <p
            style={{
              fontSize: "calc(12px + 2vmin)",
              fontWeight: "light",
              color: "white",
            }}
          >
            Get Feedback From 15 Top Venture Capitalists.
          </p>
          <ShortButton text={"Apply"} link={"https://asesstanford.typeform.com/to/G6WqxF"} color={"white"} />
          <p className="text-sm text-white">By February 3th @ 11:59 PM</p>
        </div>
      </div>
    </div>
  );
}