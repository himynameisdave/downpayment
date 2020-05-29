<script>
  import { link } from 'svelte-spa-router'
  import Flex from 'svelte-flex';
</script>

<footer>
  <div class="inner">
    <Flex justify="center">
      <a href="/about" class="footer-link" use:link>
        About
      </a>
      <a href="/privacy" class="footer-link" use:link>
        Privacy Policy
      </a>
      <a href="/terms" class="footer-link" use:link>
        Terms of Service
      </a>
    </Flex>
    <div class="disclaimer">
      Disclaimer: This tool for rough calculations based on the <a href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages/down-payment.html" target="_blank" rel="noopener">guidelines set forth by the Government of Canada</a>. Do not take this as legal advice, and consult a mortgage broker for more accurate information.
    </div>
  </div>
</footer>

<style>
  footer {
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    padding: 1rem 0;
    font-size: 0.8rem;
    width: 100%;
  }
  .inner {
    margin: 0 auto;
    width: 50%;
  }
  a.footer-link {
    margin: 0 0.5rem 0;
  }
  .disclaimer {
    font-size: 0.65rem;
    margin-top: 0.5rem;
  }
</style>
