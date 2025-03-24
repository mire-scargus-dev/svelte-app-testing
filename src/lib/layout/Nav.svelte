<script>
    let menuList = [
        'Inicio',
        'Menú 1',
        'Menú 2'
    ]
</script>

<nav class="flex gap-8 bg-green-700 text-white">
    {#each menuList as menu}
        <p class="hover:bg-blue-500 p-4 cursor-pointer">
            {menu}
        </p>
    {/each}
</nav>