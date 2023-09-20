export default function WhatYoullDo({ header, text, img }) {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={img} />
      <h2
        style={{
          fontSize: "calc(12px + 1vmin)",
          fontWeight: "normal",
          fontFamily: "Inter",
          color: "black",
          maxWidth: "100%",
        }}
      >
        {header}
      </h2>
      <p
        style={{
          fontSize: "calc(9px + 1vmin)",
          fontWeight: "normal",
          fontFamily: "Inter",
          color: "#667085",
          width: "50%",
        }}
      >
        {text}
      </p>
    </div>
  );
}
