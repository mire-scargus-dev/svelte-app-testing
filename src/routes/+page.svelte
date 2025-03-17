<script lang="ts">
	import Header from './Header.svelte';

	let name = $state('Scott');
	let status: 'OPEN' | 'ÇLOSED' = $state('OPEN');

</script>

<Header {name}/>

<input type="text" bind:value={name}/>