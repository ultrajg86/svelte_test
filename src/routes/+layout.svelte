<script>
  import '../app.css';
  import Sidebar from '../components/Sidebar.svelte';
  import Navbar from '../components/Navbar.svelte';
</script>

<div class="flex h-screen bg-gray-200">
  <Sidebar />
  <div class="flex flex-col flex-1 w-full">
    <Navbar />
    <main class="h-full overflow-y-auto p-4">
      <slot />
    </main>
  </div>
</div>
