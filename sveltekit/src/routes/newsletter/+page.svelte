<script>
	import Header from '$lib/components/Header.svelte';
	import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';

	let formData = {
		name: '',
		email: '',
		interest: ''
	};

	function handleSubmit(e) {
		e.preventDefault();
		alert('Thank you for subscribing! You will receive our next newsletter soon.');
		formData = { name: '', email: '', interest: '' };
	}
</script>

<svelte:head>
	<title>Newsletter - Permits & More</title>
	<meta
		name="description"
		content="Newsletter - Stay updated with the latest permit processing news, tips, and industry insights from Permits & More."
	/>
</svelte:head>

<Header />

<!-- Page Hero -->
<section class="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-neutral-50">
	<div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
		<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Stay Informed</p>
		<h1 class="text-4xl md:text-5xl lg:text-6xl leading-tight">
			<span class="font-medium">Our</span>
			<span class="font-serif italic text-brand-500"> Newsletter</span>
		</h1>
		<p class="text-lg text-neutral-600 max-w-2xl mx-auto mt-6">
			Stay informed with the latest permit processing news, industry updates, and expert tips from
			our team.
		</p>
	</div>
</section>

<!-- Newsletter Signup -->
<section class="py-20 lg:py-28 bg-white">
	<div class="max-w-3xl mx-auto px-6 lg:px-8">
		<AnimateOnScroll>
			<div class="text-center mb-12">
				<div class="icon-gradient w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
					<svg
						class="w-10 h-10 text-brand-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
				</div>
				<h2 class="text-3xl md:text-4xl leading-tight mb-4">
					<span class="font-medium">Subscribe to</span>
					<span class="font-serif italic"> Our Newsletter</span>
				</h2>
				<p class="text-neutral-600">
					Get monthly updates on permit processing best practices, regulatory changes, and
					exclusive insights delivered straight to your inbox.
				</p>
			</div>
		</AnimateOnScroll>

		<AnimateOnScroll delay={1}>
			<div class="bg-neutral-50 rounded-2xl p-8 md:p-12">
				<form on:submit={handleSubmit} class="space-y-6">
					<div>
						<label class="block text-neutral-700 font-medium mb-2">Full Name</label>
						<input
							type="text"
							placeholder="John Doe"
							required
							bind:value={formData.name}
							class="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
						/>
					</div>
					<div>
						<label class="block text-neutral-700 font-medium mb-2">Email Address</label>
						<input
							type="email"
							placeholder="john@example.com"
							required
							bind:value={formData.email}
							class="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
						/>
					</div>
					<div>
						<label class="block text-neutral-700 font-medium mb-2">I'm interested in (optional)</label>
						<select
							bind:value={formData.interest}
							class="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
						>
							<option value="">Select your interest</option>
							<option>Residential Permits</option>
							<option>Commercial Permits</option>
							<option>Code Compliance</option>
							<option>General Industry News</option>
						</select>
					</div>
					<button type="submit" class="w-full btn-primary text-white py-4 rounded-xl font-semibold text-lg">
						Subscribe Now
					</button>
				</form>
				<p class="text-center text-neutral-500 text-sm mt-6">
					We respect your privacy. Unsubscribe at any time.
				</p>
			</div>
		</AnimateOnScroll>

		<!-- Benefits -->
		<div class="grid md:grid-cols-3 gap-8 mt-16">
			<AnimateOnScroll>
				<div class="text-center">
					<div
						class="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
					>
						<svg
							class="w-7 h-7 text-brand-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
							/>
						</svg>
					</div>
					<h3 class="font-semibold mb-2">Industry Updates</h3>
					<p class="text-neutral-600 text-sm">
						Stay current with the latest building code changes and regulations.
					</p>
				</div>
			</AnimateOnScroll>
			<AnimateOnScroll delay={1}>
				<div class="text-center">
					<div
						class="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
					>
						<svg
							class="w-7 h-7 text-brand-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
							/>
						</svg>
					</div>
					<h3 class="font-semibold mb-2">Expert Tips</h3>
					<p class="text-neutral-600 text-sm">
						Learn best practices for streamlining your permit process.
					</p>
				</div>
			</AnimateOnScroll>
			<AnimateOnScroll delay={2}>
				<div class="text-center">
					<div
						class="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
					>
						<svg
							class="w-7 h-7 text-brand-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="font-semibold mb-2">Monthly Delivery</h3>
					<p class="text-neutral-600 text-sm">
						Receive curated content once a month - no spam, ever.
					</p>
				</div>
			</AnimateOnScroll>
		</div>
	</div>
</section>
