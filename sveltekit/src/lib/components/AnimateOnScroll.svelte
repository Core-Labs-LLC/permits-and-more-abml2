<script>
	import { onMount } from 'svelte';

	export let delay = 0;
	export let className = '';

	let element;
	let visible = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.1
			}
		);

		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	});
</script>

<div
	bind:this={element}
	class="animate-on-scroll {className} {delay > 0 ? `delay-${delay}` : ''}"
	class:visible
>
	<slot />
</div>
