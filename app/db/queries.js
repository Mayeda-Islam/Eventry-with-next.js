// import { eventModel } from "@/models/event-models";

import { eventModel } from "../models/event-models";
import { userModel } from "../models/user-model";
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
export async function createUSer(user) {
  return await userModel.create(user);
}

export async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}
