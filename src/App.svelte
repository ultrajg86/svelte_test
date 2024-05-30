<script>
  import "./app.css";
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";

  import {
    Button,
    Alert,
    Card,
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Toast,
  } from "flowbite-svelte";
  import { FireOutline } from "flowbite-svelte-icons";
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Button color="primary">Primary</Button>
    <Alert color="primary">Primary</Alert>
    <Card href="/cards" color="primary">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-800"
      >
        Noteworthy technology acquisitions 2021
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-700 leading-tight">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
    <Navbar let:hidden let:toggle color="primary">
      <NavBrand href="/">
        <img
          src="/images/flowbite-svelte-icon-logo.svg"
          class="me-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span
          class="self-center whitespace-nowrap text-xl font-semibold dark:text-red-800"
          >Flowbite</span
        >
      </NavBrand>
      <NavHamburger on:click={toggle} />
      <NavUl {hidden}>
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/about">About</NavLi>
        <NavLi href="/services">Services</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/contact">Contact</NavLi>
      </NavUl>
    </Navbar>
    <Toast color="primary">
      <svelte:fragment slot="icon">
        <FireOutline class="w-6 h-6" />
      </svelte:fragment>
      Dismissable user notification.
    </Toast>
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
