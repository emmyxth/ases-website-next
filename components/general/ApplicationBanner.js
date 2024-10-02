import React from 'react';
import Link from 'next/link';
import ShortButton from "./ShortButton";

const ApplicationBanner = () => {
  return (
    <div
      className="w-full bg-[#8c1515] text-white py-4 text-center"
      style={{ borderBottom: "1px solid black" }}
    >
      <div className="max-w-[1280px] mx-auto flex justify-center items-center mobile:flex-col desktop:flex-row">
        <p className="text-lg mr-4 mobile:mb-2 desktop:mb-0">
          Bootcamp Applications are open.
        </p>
        <ShortButton
          text="APPLY NOW"
          link="https://asesstanford.typeform.com/2024-2025Team"
          color="white"
        />
      </div>
    </div>
  );
};

export default ApplicationBanner;