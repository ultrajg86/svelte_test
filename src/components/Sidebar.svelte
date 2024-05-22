<script>
    let links = [
      { name: 'Dashboard', href: '/dashboard', icon: 'home' },
      { name: 'TradeList', href: '/trade-list', icon: 'cog' },
      { name: 'Profile', href: '#', icon: 'user' }
    ];
  </script>
  
  <aside class="w-64 bg-gray-800 text-gray-100">
    <div class="p-4 text-lg font-bold">Admin</div>
    <nav>
      {#each links as link}
        <a href={link.href} class="block py-2.5 px-4 hover:bg-gray-700">{link.name}</a>
      {/each}
    </nav>
  </aside>
  