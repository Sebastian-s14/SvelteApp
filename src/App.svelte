<script>
	import ButtonCount from './components/ButtonCount.svelte';
	import Photos from './components/Photos.svelte';
	import Input from './components/Input.svelte';
	import About from "./components/About.svelte";
	import Text from './components/Text.svelte';
	import Person from './components/Person.svelte'
	import Skills from './components/Skills.svelte';

	export let name;
	export let lastname;
	let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png";

	const data = {
		name: "Sebastián",
		lastname: "Sánchez",
		age: "20"
	}
</script>

<style>
	:global(body) {
		background-color: #f2f2f2;
		color: #0084f6;
	}

	:global(:root) {
		--theme-color: purple;
	}

	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	main img {
		width: 30%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hola {name} { lastname }!</h1>
	<About/>
	<Text anotherText="HOLA DE NUEVO"/>
	<Text/>
	<!-- <Person { name } { lastname } age={ data.age }/> -->
	<!-- <Person data={ data }/> -->
	<Person { ...data }/>
	<Skills/>
	<Input/>
	<ButtonCount/>
	<Photos/>
	<img src={ svelteLogo } alt="Svelte">
</main>
