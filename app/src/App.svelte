<script>

	import BucketRow from './BucketRow.svelte';


	//	User-input value
	let inputValue = null;
	//	The parsed numeric asking price value
	let value = 0;
	//	Different price buckets
	let buckets = {
		low: 0,
		mid: 0,
		high: 0,
	};
	let totalDownpayment = value;

	function stripCommas(val) {
		return val.replace(/,/g, '');
	}

	function stripAndParse(val) {
		return parseFloat(
			stripCommas(val)
		);
	}

	function resetBuckets() {
		buckets = {
			low: 0,
			mid: 0,
			high: 0,
		};
	}

	function calculate(percent) {
		return {
			percentOf(value) {
				return value * (percent / 100);
			}
		};
	}

	function sum(a, b) {
		return a + b;
	}

	function formatValue(inputValue) {
		if (inputValue === null) {
			resetBuckets();
			return value = 0;
		}
		const stripped = stripAndParse(inputValue);
		if (isNaN(stripped)) {
			resetBuckets();
			return value = 0;
		}
		value = stripped;
		//	TODO: this could be a reactive statement / moved out of here
		if (value >= 1000000) {
			return buckets = {
				low: 0,
				mid: 0,
				high: calculate(20).percentOf(value),
			}
		}
		if (value <= 500000) {
			return buckets = {
				low: calculate(5).percentOf(value),
				mid: 0,
				high: 0,
			}

		}
		const remainder = value - 500000;
		return buckets = {
			low: calculate(5).percentOf(500000),
			mid: calculate(10).percentOf(remainder),
			high: 0,
		};
	}

	$: formatValue(inputValue)

	$: total = Object.values(buckets).reduce(sum, 0);

</script>

<main>
	<h1>Downpayment Calculator</h1>	
	<p>The simplest minimum downpayment calculator on the web for mortgages Canada.</p>
	<div class="flex">
		$<input type="text" class="price" placeholder="Asking price" bind:value={inputValue} />
	</div>

	<BucketRow
		amount={buckets.low}
		description="for %5 of the first $500k"
	/>
	<BucketRow
		amount={buckets.mid}
		description="for %10 of the next $500k"
	/>
	<BucketRow
		amount={buckets.high}
		description="for %20 of everything over $1m"
	/>
	<div class="total">
		Total: ${total}
	</div>
</main>

<style>
	main {
		margin: 0 auto;
		max-width: 650px;
		text-align: center;
		width: 90%;
	}
	
	div.flex {
		align-items: center;
		display: flex;
		justify-content: center;
		font-size: 2rem;
		font-weight: 700;
		margin: 0 auto 1rem;
	}

	input.price {
		border-radius: 4px;
		font-weight: normal;
		margin: 0;
		width: 100%;
	}
	
	div.box {
		border: 1px solid #333;
		align-items: flex-start;
		display: flex;
		justify-content: center;
	}

</style>
