import { writable } from 'svelte/store';

export const todoStore = writable([{ title: 'Example todo', created: new Date(), completed: null }]);
