<script>
  import { onMount } from 'svelte';
  import AskingPriceInput from '../components/AskingPriceInput.svelte';
  import BucketRow from '../components/BucketRow.svelte';
  import Layout from '../components/Layout.svelte';
  import downpayment from './require-core.js';

  let inputRef = null;
  //	User-input value
  let inputValue = null;
  //	The parsed numeric asking price value
  let value = 0;
  //	The total min downpayment amount
  let total = 0;
  //	Different price buckets
  let buckets = {
    FIRST: 0,
    NEXT: 0,
    LAST: 0,
  };

  function formatValue(inputValue) {
    const {
      total: updatedTotal,
      ...updatedBuckets
    } = downpayment(inputValue || '');
    total = updatedTotal;
    buckets = updatedBuckets;
  }

  //  Focus onMount
  onMount(() => {
    if (inputRef) {
      inputRef.focus();
    }
  });

  $: formatValue(inputValue);

</script>

<Layout>
  <h1>Downpayment Calculator</h1>	
  <p>The simplest minimum downpayment calculator on the web for mortgages in Canada.</p>
  
  <AskingPriceInput
    inputValue={inputValue}
    inputRef={inputRef}
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
