<script>
  import { onMount } from 'svelte';

  let inputRef;
  export let inputValue;

  function focusInput() {
    if (inputRef) {
      inputRef.focus();
    }
  }

  onMount(focusInput);

</script>

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
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
  }

  input.price {
    border-radius: 4px;
    font-weight: normal;
    margin: 0;
    width: 100%
  }
</style>

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
