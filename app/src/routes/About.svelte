<script>
  import Layout from '../components/Layout.svelte';
</script>

<Layout includeBackLink>
  <h1>About</h1>
  <p>
    Despite living in the <a href="https://bc.ctvnews.ca/canada-s-most-expensive-real-estate-from-vancouver-to-st-john-s-1.4487097" target="_blank" rel="noopener">most expensive city in the country</a>, I often like to daydream about owning a nice cabin somewhere in BC. I found it annoying to do the calculations for a minimum downpayment, so I built this calculator to do it for me.
  </p>
  <p>
    It's <a href="https://github.com/himynameisdave/downpayment" target="_blank" rel="noopener">open-source</a> and was made with <a href="https://svelte.dev/" target="_blank" rel="noopener">Svelte</a>. I plan on expanding the project by deploying it as a service (so that you could <code>curl</code> it if you wanted), as well as a command-line interface (because why not).
  </p>
</Layout>
