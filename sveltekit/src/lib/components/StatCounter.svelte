<script>
	import { onMount } from 'svelte';

	export let target = 0;
	export let suffix = '';
	export let duration = 2000;

	let displayValue = 0;
	let element;
	let animated = false;

	function animateCounter() {
		if (animated) return;
		animated = true;

		const isDecimal = target % 1 !== 0;
		const step = target / (duration / 16);
		let current = 0;

		const timer = setInterval(() => {
			current += step;
			if (current >= target) {
				displayValue = isDecimal ? target.toFixed(1) : target;
				clearInterval(timer);
			} else {
				displayValue = isDecimal ? current.toFixed(1) : Math.floor(current);
			}
		}, 16);
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animateCounter();
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

<span bind:this={element} class="stat-number">{displayValue}{suffix}</span>
