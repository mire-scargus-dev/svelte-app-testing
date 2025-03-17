<!-- primero va el script -->
<script lang="ts">
	let {
		name //nombre del prop
	}: {
		name: string; //definicion de los tipos de las props
	} = $props(); //no entiendo bien este tipo de nomenclatura
</script>

<!-- luego el html -->
<h1>Hello {name}</h1>
<h2>{name.replaceAll('t', 'X')}</h2>

<!-- y al final todo el css -->
<style>
</style>
