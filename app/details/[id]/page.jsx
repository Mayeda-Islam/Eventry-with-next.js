import EventDetails from "@/app/components/details/EventDetails";
import EventVenue from "@/app/components/details/EventVenue";
import HeroSection from "@/app/components/details/HeroSection";
import { getEventById } from "@/app/db/queries";
import React from "react";

const EventDetailsPage = async ({ params: { id } }) => {
  const eventDetails = await getEventById(id);
  console.log(eventDetails._doc);
  return (
    <div>
      <HeroSection eventDetails={eventDetails} />
      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails
            details={eventDetails?._doc?.details}
            swags={eventDetails?._doc?.swags}
          />
          <EventVenue location={eventDetails?._doc?.location} />
        </div>
      </section>
    </div>
  );
};

export default EventDetailsPage;
