<script lang="ts">
	import Nav from '$lib/layout/Nav.svelte';
	import BasicMap from '$lib/shared/BasicMap/BasicMap.svelte';
	import Map from '$lib/shared/BasicMap/BasicMap.svelte';
	import StyledMap from '$lib/shared/StyledMap.svelte';
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<Nav />
<div class="flex gap-x-20 p-4 border border-red-500">
	<BasicMap  />
	<StyledMap />
</div>
