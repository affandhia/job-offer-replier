import { writable } from "svelte/store";
import { interested } from "./default.js";

export const recruiterName = writable("");
export const recruiterCompany = writable("");
export const replies = writable([interested]);
