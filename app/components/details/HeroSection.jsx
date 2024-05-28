import Image from "next/image";
import React from "react";
import EventAction from "../landing/EventAction";

const HeroSection = ({ eventDetails }) => {
  console.log(eventDetails);
  return (
    <section class="container">
      <div class="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={eventDetails._doc?.imageUrl}
          alt="Event 1"
          class=" mx-auto"
          width={500}
          height={500}
        />
      </div>
      {/* <!-- Details --> */}
      <div class="flex items-end">
        <div class="flex-auto py-4">
          <h1 class="font-bold text-2xl">{eventDetails?.name}</h1>
          <p class="text-[#9C9C9C] text-base mt-1">{eventDetails?.location}</p>
          <div class="text-[#737373] text-sm mt-1">
            <span>{eventDetails._doc?.interested_ids?.length} Interested</span>
            <span>|</span>
            <span>{eventDetails._doc?.going_ids?.length} Going</span>
          </div>
        </div>

        <EventAction fromDetails={true} />
      </div>
    </section>
  );
};

export default HeroSection;
