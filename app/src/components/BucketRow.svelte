<script>
  import { fade } from 'svelte/transition';
  import Flex from 'svelte-flex';
  import NumericDisplay from './NumericDisplay.svelte';

  export let description = '';
  export let amount = 0;
  export let isTotal = false;
</script>

<style>
  .row {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .row.total {
    font-size: 1.5rem;
    font-weight: 700;
    padding-top: 0.25rem;
    border-top: 1px solid #ccc;
  }
  .amount {
    font-weight: 700;
    margin-right: 0.5rem;
  }
  .description {
    color: #888;
  }
</style>

{#if amount !== 0}
  <div class={isTotal ? 'row total' : 'row'} transition:fade>
    <Flex justify="start">
      <b>$</b>
      <span class="amount">
        <NumericDisplay num={amount} />
      </span>
      <span class="description">
        {description}
      </span>
    </Flex>
  </div>
{/if}
