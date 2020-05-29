<script>
	import Router from 'svelte-spa-router';
	import Downpayment from './downpayment/Downpayment.svelte';
	import About from './routes/About.svelte';
	import NotFound from './routes/NotFound.svelte';
	import Privacy from './routes/Privacy.svelte';
	import Terms from './routes/Terms.svelte';

	const routes = {
		'/': Downpayment,
		'/about': About,
		'/privacy': Privacy,
		'/terms': Terms,
		'*': NotFound,
	};
</script>

<Router {routes}/>
