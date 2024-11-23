export default function SummitDetails() {
  const details = [
    { icon: "people", title: "Summit Dates", description: "April 7th - April 13th 2024" },
    { icon: "calendar", title: "Early Application Deadline", description: "December 22, 2024" },
    { icon: "calendar", title: "Final Application Deadline", description: "January 9th, 2025" },
    { icon: "location", title: "Location", description: "Stanford, California" },
  ];

  return (
    <div className="bg-[#FCFAFF] desktop:p-24 mobile:px-4 mobile:py-8" style={{ borderBottom: "1px solid black" }}>
      <div className="max-w-[1280px] mx-auto">
        <h2
          style={{
            fontSize: "calc(20px + 3vmin)",
            fontWeight: "500",
            color: "#4470B6",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Let's get the details out of the way.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mobile:gap-8">
          {details.map((detail, index) => (
            <div key={index} className="text-center mb-6 md:mb-0">
              <i className={`icon ${detail.icon} text-3xl mb-3`}></i>
              <h3 className="text-lg font-bold mb-1">{detail.title}</h3>
              <p className="text-sm">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}