import App from './App.svelte';
const downpayment = require('../../core/index.js');

const app = new App({
	target: document.body,
	props: {
		downpayment,
	}
});

export default app;
