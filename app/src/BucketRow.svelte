<script>
  import Flex from 'svelte-flex';
	import { fade } from 'svelte/transition';

  export let description = '';
  export let amount = 0;
</script>

<style>
  .row {
    color: #333;
    font-size: 1.5rem;
  }
  .amount {
    font-weight: 700;
  }
  .description {
    color: #888;
  }
  
</style>

{#if amount !== 0}
  <div class="row" transition:fade>
    <Flex justify="start">
      $
      <span class="amount">
        {amount}
      </span>
      <span class="description">
        {description}
      </span>
    </Flex>
  </div>
{/if}
