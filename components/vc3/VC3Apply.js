import LongButtonWOArrowCustomized from "../general/LongButtonWOArrow";

export default function VC3Apply() {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center p-12 gap-y-8 text-center">
      <h2
        style={{
          fontSize: "calc(25px + 2vmin)",
          fontWeight: "500",
        }}
      >
        Get Feedback on Your Startup
      </h2>
      <p className="max-w-2xl mb-8">
        We're looking for Stanford startups ready to meet and receive feedback from top venture capitalists in Silicon Valley.
      </p>
      <LongButtonWOArrowCustomized
        text={"Apply Now"}
        link={"https://asesstanford.typeform.com/to/G6WqxF"}
      />
    </div>
  );
}