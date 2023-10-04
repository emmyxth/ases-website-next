import React from "react";
import ShortButtonCustomized from "../general/ShortButton";
import Link from "next/link";
import Image from "next/image";

export default function TimelineComponentA({
  header,
  description,
  image,
  timeframe,
  link,
}) {
  return (
    <div className="flex desktop:flex-row mobile:flex-col pt-5 desktop:align-start mobile:align-center space-y-8 mobile:pb-8 mobile:border-b-2 desktop:border-none">
      <div className="flex flex-col desktop:items-start mobile:items-center desktop:text-start mobile:text-center justify-start desktop:w-1/2 mobile:w-full desktop:pe-20 gap-y-8">
        <h1
          style={{
            fontSize: "calc(16px + 2vmin)",
          }}
        >
          {header}
        </h1>
        <p style={{ fontFamily: "Inter", fontSize: "calc(9px + 1vmin)" }}>
          {description}
        </p>
        <Link href={link}>
          <ShortButtonCustomized text="Learn more" />
        </Link>
      </div>
      <div className="flex flex-1 flex-col-reverse desktop:items-end mobile:items-center justify-center">
        <div
          style={{
            width: "38vw", // Set a fixed width
            height: "30vw",
            position: "relative",
          }}
        >
          <Image
            src={image}
            alt={header}
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <h1
          style={{
            fontSize: "calc(8px + 2vmin)",
            fontWeight: "Medium",
            fontFamily: "Inter",
            paddingBottom: "1rem",
          }}
        >
          {timeframe}
        </h1>
      </div>
    </div>
  );
}
