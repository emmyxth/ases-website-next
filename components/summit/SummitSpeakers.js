import React from 'react';

const speakers = [
  {
    id: 'thiel',
    quote: "Brilliant thinking is rare, but courage is in even shorter supply than genius.",
    name: "Peter Thiel",
    title: "Founder, Paypal"
  },
  {
    id: 'musk',
    quote: "I would like to die on Mars. Just not on impact.",
    name: "Elon Musk",
    title: "Founder, Tesla & SpaceX"
  },
  {
    id: 'ng',
    quote: "When everyone in the world has access to great education, it really means we can move forward to a world where there is an equality of opportunity.",
    name: "Andrew Ng",
    title: "Founder, Coursera"
  }
];

export default function SummitSpeakers() {
  return (
    <div className="bg-white desktop:p-24 mobile:px-4 mobile:py-8" style={{ borderBottom: "1px solid black" }}>
      <div className="max-w-[1280px] mx-auto">
        <h2
          style={{
            fontSize: "calc(20px + 4vmin)",
            fontWeight: "500",
            color: "#4470B6",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Some of our previous speakers.
        </h2>
        <p className="text-center mb-8 px-4">We don't just go for big names; we go for speakers who can truly push the audience to think differently.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="bg-gray-100 p-4 rounded-lg">
              <blockquote className="text-base italic mb-3">"{speaker.quote}"</blockquote>
              <p className="font-bold text-sm">{speaker.name}</p>
              <p className="text-sm">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}