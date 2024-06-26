"use client";
import { addInterestedEvent } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";

const EventAction = ({ fromDetails, eventId, interestedIds }) => {
  const isInterested = interestedIds?.find((id) => id == eventId);
  const { auth } = useAuth();
  const router = useRouter();
  const [interested, setInterested] = useState(isInterested);
  const [isPending, startTransition] = useTransition();
  async function toggleInterest() {
    if (auth) {
      await addInterestedEvent(eventId, auth.id);
      setInterested(!interested);
    } else {
      router.push("/login");
    }
  }

  // going
  const handleMarkGoing = async () => {
    if (auth) {
      router.push("/payment");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
      {/* <!-- bg-indigo-600 indicating Active --> */}
      <button
        onClick={() => {
          startTransition(() => {
            toggleInterest();
          });
        }}
        className={`w-full ${
          interested && "bg-indigo-600 hover:bg-indigo-800"
        }`}
      >
        Interested
      </button>

      {/* <!-- bg-green-600 indicating Active --> */}
      <button
        onClick={handleMarkGoing}
        className=" text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1"
      >
        Going
      </button>
    </div>
  );
};

export default EventAction;
