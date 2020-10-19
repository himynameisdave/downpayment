<script>
  import Copyright from 'svelte-copyright';
  import Flex from 'svelte-flex';
  import { link } from 'svelte-spa-router'
  import { version } from '../../../package.json';
</script>

<footer>
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
  <div class="copyright">
    <Copyright position="post">
      <a href="https://github.com/himynameisdave">Dave Lunny</a>
    </Copyright>
  </div>
  <div class="version">
    Version: <a class="version__number" href={`https://github.com/himynameisdave/downpayment/releases/tag/v${version}`} target="_blank">{version}</a>
  </div>
</footer>

<style>
  footer {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    padding: 1rem 0;
    font-size: 0.8rem;
    width: 100%;
  }

  a.footer-link {
    margin: 0 0.5rem 0;
  }
  .disclaimer {
    font-size: 0.65rem;
    margin: 0.5rem;
  }
  .copyright {
    margin: 0.5rem 0.5rem 0.25rem;
  }
  .version {
    font-size: 0.65rem;
    margin-bottom: 0.5rem;
  }
  .version__number {
    font-family: monospace;
    font-size: 0.75rem;
    font-weight: 900;
  }
</style>
