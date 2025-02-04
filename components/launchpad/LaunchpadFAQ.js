export default function LaunchpadFAQ() {
  const faqs = [
    {
      question: "Who can apply?",
      answer: "We welcome anyone to apply to Launchpad, regardless of your experience in entrepreneurship - in fact, we especially encourage those without any entrepreneurship experience and those from underrepresented backgrounds to apply. The only requirement is that you are a current high school student and are able to be present during the entire duration of Launchpad.",
    },
    {
      question: "Are meals provided during Launchpad?",
      answer: "Yes! We will provide lunch on both days of Launchpad, though you are welcome to bring your own meal as well.",
    },
    {
      question: "Is transportation provided?",
      answer: "Participants must provide their own transportation to and from the event facility.",
    },
    {
      question: "Will there be a virtual option for Launchpad?",
      answer: "Since Launchpad is a highly collaborative event, we expect all participants to be present in-person. However, we plan to record sessions and make them available to participants after the event has concluded.",
    },
    {
      question: "I have more questions. Who can I contact?",
      answer: "Reach out to the Launchpad co-directors Karen Vo (karenvo@stanford.edu) and Neva Hidajat (hidajat@stanford.edu) with any questions.",
    },
  ];

  return (
    <div className="bg-white desktop:p-24 mobile:px-6 mobile:py-12">
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
          Frequently Asked Questions
        </h2>
        <div className="max-w-[1280px] mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8">
              <h3
                style={{
                  fontSize: "calc(14px + 1vmin)",
                  fontWeight: "500",
                  color: "#A04D4E",
                  marginBottom: "0.5rem",
                }}
              >
                {faq.question}
              </h3>
              <p className="text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}