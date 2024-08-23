<script lang="ts">
	import type Micrio from 'Micrio'

	import { onMount } from 'svelte';

	import '../app.css';
	
	let micrio:Micrio.HTMLMicrioElement;

	onMount(() => {
		micrio.addEventListener('load', () => {
			console.log('primary image loaded', micrio.$current);
		}, {once: true});
	})

</script>

<micr-io id="HRpbsC" bind:this={micrio} data-logo="false" data-inittype="cover"></micr-io>

<div>
	<h1>Welcome to this Micrio demo</h1>
	<p>Visit <a href="https://doc.micr.io">doc.micr.io</a> to read the documentation</p>
</div>

<style>
	micr-io {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
	}
	div {
		position: relative;
		z-index: 2;
	}

</style>
