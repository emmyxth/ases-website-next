import LongButtonWOArrowCustomized from "../general/LongButtonWOArrow";
export default function BootcampApply() {
  return (
    <div className="w-full bg-[#FCFAFF] flex flex-col justify-center items-center p-12 gap-y-8 text-center">
      <h1
        style={{
          // fontFamily: "Space Grotesk",
          fontSize: "calc(25px + 2vmin)",
          fontWeight: "500",
        }}
      >
        Ready to apply?
      </h1>
      <LongButtonWOArrowCustomized
        text={"Let's go"}
        link={"https://asesstanford.typeform.com/2024-2025Team"}
      />
    </div>
  );
}
