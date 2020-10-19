<div align="center" margin="0 auto 20px">
  <h1>downpayment calculator</h1>
  <p style="font-style: italic;">
    🏡 A tiny app for calculating the minimum mortgage downpayment in Canada.
  </p>
</div>

---

This is a simple [Svelte](https://svelte.dev/)-based web app for determining the legal minimum downpayment for mortgages in Canada. It is not meant to be super comprehensive, for example it doesn't allow you to calculate interest payments etc.

## In action

You can see it in action over at [**downpaymentcalculator.ca**](https://downpaymentcalculator.ca).

**Query param**

If you want to quickly find out the minimum downpayment calculation, you can include a query string parameter in the URL. Here's an example:

```
https://downpaymentcalculator.ca?asking=450000
```

This allows you to also bookmark certain price URLs if you want to return to them in the future.

## Developing

First clone the repo, then install the dependencies with your JS package manager of choice:

```bash
git clone git@github.com:himynameisdave/downpayment.git

cd ./downpayment

yarn install # or `npm install`
```

Then run this command to start the development server:

```bash
yarn run dev # or `npm run dev`
```

The app will then be running at [`localhost:5000`](http://localhost:5000).

## Contributing

Issues and pull requests are quite welcome!

## Project Goals

It would be cool to add a simple API for this, it would also be cool to respond with some JSON if you `curl` the endpoint.

---

_Created by [Dave](https://himynameisdave.com)._
