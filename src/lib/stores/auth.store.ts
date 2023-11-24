import { fireAuth } from "$lib/firebase/firebase";
import type { User } from "@firebase/auth";
import { writable } from "svelte/store";

export type AuthState = User | null;


const auth = writable<AuthState>(null);

fireAuth.onAuthStateChanged((state) => {
	auth.set(state)
})

