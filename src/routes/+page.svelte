<script lang="ts">
	import { goto } from '$app/navigation';
	import {weeksCount} from '$lib/store';
	let birthdayAsString = new Date().toJSON().slice(0, 10);
	$: birthday = new Date(birthdayAsString);

	const getElapsedWeeks = (birthday: Date) => {
		const today = new Date();
		const elapsedWeeks = Math.floor((today.getTime() - birthday.getTime()) / (1000 * 3600 * 24 * 7));
		return elapsedWeeks;
	}
	$: noWeeksSoFar = getElapsedWeeks(birthday);

	const onFormSubmit = (event: Event) => {
		event.preventDefault();
		weeksCount.update(noWeeksSoFar);
		goto('/calendar')
	}
</script>


	<div class="bg-white flex flex-col justify-center items-start">
		<h2 class="self-center my-4">Memento Mori</h2>
		<form action="#" on:submit={onFormSubmit} class="border-black rounded p-10 m-20 border-2 flex flex-col items-start gap-10">
			<div class="">
				<label for="birthday">Your Birthday:</label>
				<input type="date" bind:value={birthdayAsString}>
			</div>
			<button type="submit" class="self-center">Create Calendar</button>
		</form>
	</div>