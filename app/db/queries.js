// import { eventModel } from "@/models/event-models";

import { eventModel } from "../models/event-models";
import { replaceMongoIdInArray } from "../utils/data-utils";

export async function getAllEvents() {
  const allEvents = await eventModel.find();
  return replaceMongoIdInArray(allEvents);
}
