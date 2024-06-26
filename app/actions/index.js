"use server";

import { revalidatePath } from "next/cache";
import { userModel } from "../models/user-model";

const { redirect } = require("next/navigation");
const {
  createUSer,
  findUserByCredentials,
  updateInterest,
} = require("../db/queries");

export async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const createdUser = await createUSer(user);
  redirect("/login");
}

export async function PerformLogin(formData) {
  try {
    const credentials = {};
    credentials.email = formData.get("email");
    credentials.password = formData.get("password");
    const found = await findUserByCredentials(credentials);
    return found;
  } catch (err) {
    throw err;
  }
}
export async function addInterestedEvent(eventId, authId) {
  console.log(eventId);
  try {
    await updateInterest(eventId, authId);
  } catch (err) {
    throw err;
  }
  revalidatePath("/");
}
