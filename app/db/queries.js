// import { eventModel } from "@/models/event-models";

import { eventModel } from "../models/event-models";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "../utils/data-utils";

export async function getAllEvents() {
  const allEvents = await eventModel.find().lean();
  return replaceMongoIdInArray(allEvents);
}
export async function getEventById(id) {
  const event = await eventModel.findById(id);
  return replaceMongoIdInObject(event);
}
