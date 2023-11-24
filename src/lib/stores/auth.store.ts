import type Student from "$lib/types/Student.model";
import type Teacher from "$lib/types/Teacher.model";
import { writable } from "svelte/store";

export const auth = writable<Student | Teacher | null>(null);

