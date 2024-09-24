export default function SummitValueProp() {
  const values = [
    {
      icon: "design-thinking",
      title: "Design Thinking.",
      description: "D.thinking is an actionable and effective way of creatively solving problems. It's taught at Stanford and embraced by the Valley's best startups. In one week, you will learn it from the best, use it to solve a problem, and then master it for your next startup.",
    },
    {
      icon: "global-network",
      title: "Global Network.",
      description: "You'll work closely with 30 of the best entrepreneurs from around the world. We say work, but in fact, Summit is so much more than that. You'll spend the week learning, laughing, and bonding with the other delegates as you soak up everything that is Silicon Valley.",
    },
    {
      icon: "wicked-problems",
      title: "Wicked Problems.",
      description: "Maybe it's the fresh California air. Maybe it's the incredible delegates you'll meet. Maybe it's the amazing speakers and workshops. In any case, we see it every year: after Summit, delegates go on to solve the world's most challenging problems.",
    },
  ];

  return (
    <div className="bg-white desktop:p-24 mobile:px-6 mobile:py-12" style={{ borderBottom: "1px solid black" }}>
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
          Get ready for Summit.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center mb-8 md:mb-0">
              <i className={`icon ${value.icon} text-4xl mb-4`}></i>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="px-4">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}