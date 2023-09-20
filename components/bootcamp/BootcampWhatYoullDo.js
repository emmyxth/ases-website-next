import WhatYoullDoComponent from "./WhatYoullDoComponent";
import data from "../../public/textContent/bootcampWhatYoullDo.json";

export default function BootcampWhatYoullDo() {
  return (
    <div
      className="bg-white laptop:p-24 mobile:pt-20"
      style={{ borderBottom: "1px solid black" }}
    >
      <div className="flex laptop:flew-row mobile:justify-center laptop:justify-between laptop:items-start mobile:items-center laptop:text-start mobile:text-center laptop:pb-12 mobile:pb-8">
        <h1
          style={{
            fontSize: "calc(24px + 4vmin)",
            fontWeight: "normal",
            fontFamily: "Space Grotesk",
            color: "#4470B6",
            fontWeight: "500",
            maxWidth: "100%",
          }}
        >
          What you'll do
        </h1>
        <div className="border-b border-black"></div>
      </div>
      <div className="flex laptop:flex-row mobile:flex-col laptop:justify-between laptop:pb-12 mobile:pb-8 mobile:space-y-4 laptop:space-y-0 ">
        {data.map((d) => {
          return (
            <WhatYoullDoComponent header={d.header} text={d.text} img={d.img} />
          );
        })}
      </div>
    </div>
  );
}
