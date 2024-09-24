import React from 'react';

const activities = [
  { id: 'learn', title: 'Learn Stuff.', description: '(design thinking workshop)' },
  { id: 'make', title: 'Tour Stuff.', description: '(experience Stanford\'s campus)' },
  { id: 'hear', title: 'Hear Stuff.', description: '(once in a lifetime speakers)' },
  { id: 'eat', title: 'Eat Stuff.', description: '(formal banquet)' },
  { id: 'pitch', title: 'Pitch Stuff.', description: '(pitch competition)' },
  { id: 'selfie', title: 'And much, much more.', description: '' },
];

export default function SummitActivities() {
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
          Workshops, Networking, and ...stuff.
        </h2>
        <p className="text-center mb-12">Jokes aside, get ready for an action-packed week of workshops, speakers and bonding.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}