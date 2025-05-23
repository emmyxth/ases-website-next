import ShortButton from "../general/ShortButton";
export default function LaunchpadDetails() {
  const details = [
    { label: "Where:", answer: "Stanford University" },
    { label: "When:", answer: "Saturday, April 26th - Sunday, April 27th, 2025\n9:00AM - 5:30PM PST each day" },
    { label: "Who:", answer: "Any student between grades 9 to 12" },
    { label: "Program Cost:", answer: "Free" },
    { label: "Application Opens:", answer: "Friday, March 7th, 2025, 11:59PM" },
    { label: "Application Deadline:", answer: "Friday, April 11th, 2025, 11:59PM" },
  ];

  return (
    <div className="bg-white desktop:p-24 mobile:px-6 mobile:py-12" style={{ borderBottom: "1px solid black" }}>
      <div className="max-w-[1280px] mx-auto">
        <h2
          style={{
            fontSize: "calc(24px + 4vmin)",
            fontWeight: "500",
            color: "#A04D4E",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          The details.
        </h2>
        <div className="max-w-[720px] mx-auto">
          {details.map((detail, index) => (
            <div key={index} className="flex desktop:flex-row mobile:flex-col justify-between mb-4">
              <div className="font-bold text-lg">{detail.label}</div>
              <div className="text-lg whitespace-pre-line text-right">{detail.answer}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <ShortButton text={"Apply"} link={"https://forms.gle/XidiDoD6rYspsvNW8"} color={"white"} />
        </div>
      </div>
    </div>
  );
}