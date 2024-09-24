export default function LaunchpadProgram() {
  const programs = [
    {
      title: "Design Thinking",
      description: "Industry leaders, entrepreneurs, and people all around the world are using the design thinking process in order to identify big problems and come up with creative solutions. As part of this program, we will walk you through this process: from identifying a problem, to searching for your very own solutions.",
    },
    {
      title: "Pitching",
      description: "Now that you've got your idea, you're ready to develop your pitch, whether that's for potential co-founders, high-powered investors or curious strangers. You'll learn to create your pitch from people who have keynoted at conferences and won pitch competitions. Best of all, you'll get lots of practice and individualized feedback to hone your skills.",
    },
    {
      title: "UX/UI Design",
      description: "Design is becoming a cornerstone for the growth, image, and functionality of any product. We'll teach you the fundamentals of graphic design, as well as take you through creating your own product mock-up and user testing.",
    },
  ];

  return (
    <div className="bg-[#FCFAFF] desktop:p-24 mobile:px-6 mobile:py-12" style={{ borderBottom: "1px solid black" }}>
      <div className="max-w-[1280px] mx-auto">
        <h2
          style={{
            fontSize: "calc(24px + 4vmin)",
            fontWeight: "500",
            color: "#4470B6",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Program
        </h2>
        <div className="max-w-[1280px] mx-auto">
          {programs.map((program, index) => (
            <div key={index} className="mb-12">
              <h3
                style={{
                  fontSize: "calc(18px + 2vmin)",
                  fontWeight: "500",
                  color: index % 2 === 0 ? "#A04D4E" : "#4470B6",
                  marginBottom: "1rem",
                }}
              >
                {program.title}
              </h3>
              <p className="text-lg">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}