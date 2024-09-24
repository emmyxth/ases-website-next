import ShortButton from "../general/ShortButton";

export default function LaunchpadDetails() {
  const details = [
    { label: "Where:", answer: "Stanford University" },
    { label: "When:", answer: "Sunday, May 26th - Monday, May 27th, 2024\n9:00AM - 5:30PM PDT each day" },
    { label: "Who:", answer: "Any student between grades 9 to 12" },
    { label: "Program Cost:", answer: "Free" },
    { label: "Application Deadline:", answer: "Friday, May 17th, 2024, 11:59PM" },
    { label: "Application Results Released:", answer: "Saturday, May 18th, 2024, 11:59PM" },
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
          <ShortButton text={"Apply"} link={"https://forms.gle/SeB5pzAWxstfsUF56"} color={"white"} />
        </div>
      </div>
    </div>
  );
}