<script>
  import { link } from 'svelte-spa-router'
  import Footer from './Footer.svelte';

  export let includeBackLink = false;
</script>


<main>
  {#if includeBackLink}
    <a href="/" use:link>
        Back
    </a>
  {/if}
  <slot></slot>
  <Footer />
</main>

<style>
  main {
    margin: 0 auto;
    max-width: 650px;
    text-align: center;
    height: auto;
    min-height: 100%;
    padding: 2rem 0 10rem;
    width: 90%;
    position: relative;
  }  
  a {
    margin: 0;
    position: absolute;
    left: 0;
  }
</style>
