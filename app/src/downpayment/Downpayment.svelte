<script>
  import { onMount } from 'svelte';
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
  <label class="flex">
    <span class="label">Asking Price</span>
    $<input
      type="text"
      class="price"
      placeholder="Asking price"
      bind:value={inputValue}
      bind:this={inputRef}
    />
  </label>

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

<style>

  label.flex {
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    margin: 0 auto 1rem;
  }

  label.flex .label {
    position: absolute !important;
    height: 1px; 
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
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
