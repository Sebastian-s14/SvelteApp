import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Sebastián',
		lastname: 'Sánchez Puse'
	}
});

export default app;