export default function VC3Investors() {
  const investors = [
    "Khosla Ventures",
    "Bessemer Venture Partners",
    "XFund",
    "Y Combinator",
    "General Catalyst Partners",
    "Floodgate",
  ];

  return (
    <div className="bg-white desktop:p-24 mobile:px-6 mobile:py-12" style={{ borderBottom: "1px solid black" }}>
      <h2
        style={{
          fontSize: "calc(24px + 4vmin)",
          fontWeight: "500",
          color: "#4470B6",
          marginBottom: "2rem",
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        The Investors
      </h2>
      <div className="flex desktop:flex-row mobile:flex-col max-w-[1280px] mx-auto">
        <div className="desktop:w-1/3 mobile:w-full mb-8">
          <p className="text-lg">
            We've brought some of the valley's best investors to VC3. Their focuses range from consumer tech, to education, to enterprise tech, to health and much more.
          </p>
        </div>
        <div className="desktop:w-2/3 mobile:w-full desktop:ml-12 mobile:ml-0 grid desktop:grid-cols-2 mobile:grid-cols-1 gap-4">
          {investors.map((investor, index) => (
            <h4 key={index} className="text-xl font-medium">
              {investor}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
}