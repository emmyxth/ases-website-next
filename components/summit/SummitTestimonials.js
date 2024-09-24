import React from 'react';

const testimonials = [
  {
    name: "David Lu",
    university: "University of New South Wales",
    quote: "ASES Summit provided an incredible opportunity for me to learn, develop and meet entrepreneurs from all over the world. Throughout the program, I constantly felt that my way of thinking was being challenged from both the workshops offered and ideas of those around me. I would encourage anyone who is looking to refresh their perspective on their way of thinking and entrepreneurship to apply.",
    image: "/testimonial_david_lu.png"
  },
  {
    name: "Nelson Boyd",
    university: "University of New South Wales",
    quote: "ASES Summit is a must do for any entrepreneur. You will meet extraordinary talent, make great friends, and learn an awful lot.",
    image: "/testimonial_nelson_boyd.png"
  },
  {
    name: "Rangga Husnaprawira",
    university: "University of Indonesia",
    quote: "I met many inspiring people during Summit and built an invaluable network of friends! I took the lessons and experiences very personally and felt so happy to gain new perspectives for my startup. It's indeed a life-changing experience!",
    image: "/testimonial_rangga.png"
  },
  {
    name: "Jessica Tulp",
    university: "University of Auckland",
    quote: "ASES Summit provided me with a fantastic opportunity to step outside my comfort zone, meet a group of incredible people, and to gain insight and advice from the best in the business. I came home inspired and ready to take on the world. I wish I could go back and do it all again!",
    image: "/testimonial_jessica.png"
  }
];

export default function SummitTestimonials() {
  return (
    <div className="bg-white desktop:p-24 mobile:px-4 mobile:py-8">
      <div className="max-w-[1280px] mx-auto">
        <h2
          style={{
            fontSize: "calc(24px + 4vmin)",
            fontWeight: "500",
            color: "#4470B6",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Don't just take our word for it.
        </h2>
        <p className="text-center mb-8">Here's what past delegates have to say.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
              <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mb-3" />
              <div className="text-center">
                <blockquote className="text-base italic mb-3">"{testimonial.quote}"</blockquote>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm">{testimonial.university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}