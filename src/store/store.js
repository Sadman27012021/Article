import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { writable } from 'svelte/store';
import { auth } from '../lib/firebase';

export const authStore = writable({
	user: null,
	data: {}
});

export const authHandlers = {
	signup: async (email, pass) => {
		await createUserWithEmailAndPassword(auth, email, pass);
	},
	login: async (email, pass) => {
		await signInWithEmailAndPassword(auth, email, pass);
	},
	logout: async () => {
		await signOut(auth);
	}
};
