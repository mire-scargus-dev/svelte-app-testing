<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<Nav/>