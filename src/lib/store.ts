import { writable } from 'svelte/store';

const createWeeksCount = () => {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		update: (n: number) => set(n),
		reset: () => set(0)
	};
};

export const weeksCount = createWeeksCount();
