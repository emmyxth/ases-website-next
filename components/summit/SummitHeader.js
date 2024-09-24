import React from "react";
import ShortButton from "../general/ShortButton";

export default function SummitHeader() {
  return (
    <div
      className="w-full desktop:pb-24 mobile:pb-8"
      style={{ borderBottom: "1px solid black" }}
    >
      <div
        className="fixed -z-10 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/summit_bg.png')" }}
      />
      <div className="max-w-[1280px] mx-auto">
        <div className="flex pt-8 desktop:flex-row mobile:flex-col px-8 mobile:px-0 w-full mobile:gap-y-2 desktop:justify-around desktop:px-12 overflow-hidden">
          <div className="relative flex flex-col flex mobile:w-full desktop:w-4/5 desktop:pt-9 desktop:pl-9 desktop:items-start mobile:items-center gap-y-10 mobile:px-8 mobile:text-center desktop:text-left">
            <h5 className="text-white">The 26th Annual ASES Summit</h5>
            <h1
              className="desktop:w-full"
              style={{
                fontSize: "calc(18px + 5vmin)",
                fontWeight: "500",
                lineHeight: "1.3",
                color: "white",
              }}
            >
              We're looking for the world's
              <br />
              most enthusiastic entrepreneurs.
            </h1>
            <ShortButton text={"Apply Now"} link={"#"} color={"white"} />
          </div>
        </div>
      </div>
    </div>
  );
}