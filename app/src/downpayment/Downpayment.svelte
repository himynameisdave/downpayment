<script>
  import { onMount } from 'svelte';
  import { querystring } from 'svelte-spa-router';
  import { parse as parseQs } from 'query-string';
  import AskingPriceInput from '../components/AskingPriceInput.svelte';
  import BucketRow from '../components/BucketRow.svelte';
  import Layout from '../components/Layout.svelte';
  import downpayment from './require-core.js';

  //	User-input value
  let inputValue = null;
  //	The total min downpayment amount
  let total = 0;
  //	Different price buckets
  let buckets = {
    FIRST: 0,
    NEXT: 0,
    LAST: 0,
  };

  //  Parse query params for the asking price, then set it.
  onMount(() => {
    // To support cases where the hash might be in the route
    const { asking } = parseQs(window.location.search || $querystring);
    if (asking) {
      inputValue = asking;
    }
  });


  function formatValue(inputValue) {
    const {
      total: updatedTotal,
      ...updatedBuckets
    } = downpayment(inputValue || '');
    total = updatedTotal;
    buckets = updatedBuckets;

    console.log('inputValue', inputValue);
  }

  $: formatValue(inputValue);

</script>

<Layout>
  <h1>Downpayment Calculator</h1>
  <p>The simplest minimum downpayment calculator on the web for mortgages in Canada.</p>

  <AskingPriceInput
    bind:inputValue={inputValue}
  />

  <BucketRow
    amount={buckets.FIRST}
    description="for 5% of the first $500k"
  />
  <BucketRow
    amount={buckets.NEXT}
    description="for 10% of the next $500k"
  />
  <BucketRow
    amount={buckets.LAST}
    description="for 20% of everything over $1m"
  />
  <BucketRow
    amount={total}
    description="Total minimum downpayment"
    isTotal={true}
  />
</Layout>
