export default function ZeroToOne() {
  return (
    <div className="flex flex-col items-end laptop:pe-24 mobile:pe-0 laptop:pt-24 mobile:pt-12 items-center ">
      <p
        style={{
          fontSize: "calc(12px + 2vmin)",
          fontFamily: "Space Grotesk",
          textAlign: "end",
        }}
      >
        Take your ideas from
      </p>
      <div className="text-center flex mobile:flex-row laptop:flex-col mobile:gap-x-8 mobile:items-center">
        <h1
          style={{
            fontSize: "calc(64px + 10vmin)",
            fontWeight: "bold",
            color: "#A04D4E",
            fontFamily: "Space Grotesk",
          }}
        >
          0
        </h1>
        <p
          style={{
            fontSize: "calc(18px + 10vmin)",
            fontWeight: "normal",
            color: "#A04D4E",
            fontFamily: "Space Grotesk",
          }}
        >
          to
        </p>
        <h1
          style={{
            fontSize: "calc(64px + 10vmin)",
            fontWeight: "bold",
            color: "#A04D4E",
            fontFamily: "Space Grotesk",
          }}
        >
          1
        </h1>
      </div>
    </div>
  );
}
