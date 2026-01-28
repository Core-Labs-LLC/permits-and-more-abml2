<script>
	import Header from '$lib/components/Header.svelte';
	import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';
	import StatCounter from '$lib/components/StatCounter.svelte';
</script>

<svelte:head>
	<title>About Us - Permits & More</title>
	<meta
		name="description"
		content="About Permits & More - San Diego's premier permit processing experts. Learn about our team and mission."
	/>
</svelte:head>

<Header />

<!-- Page Hero -->
<section class="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-neutral-50">
	<div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
		<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Who We Are</p>
		<h1 class="text-4xl md:text-5xl lg:text-6xl leading-tight">
			<span class="font-medium">About</span>
			<span class="font-serif italic text-brand-500"> Permits & More</span>
		</h1>
		<p class="text-lg text-neutral-600 max-w-2xl mx-auto mt-6">
			Your trusted partner for exceptional engineering and permit services throughout Southern
			California.
		</p>
	</div>
</section>

<!-- About Content Section -->
<section class="py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
			<!-- Left: Image -->
			<AnimateOnScroll>
				<div class="relative">
					<img
						src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2676&auto=format&fit=crop"
						alt="Professional team reviewing construction permits and blueprints"
						class="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl"
					/>
					<!-- Floating Stats Card -->
					<div
						class="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 lg:p-8 card-hover"
					>
						<div class="text-4xl lg:text-5xl font-light text-brand-500">
							<StatCounter target={12} suffix="+" />
						</div>
						<div class="text-sm text-neutral-600 mt-1">Years of Excellence</div>
					</div>
				</div>
			</AnimateOnScroll>

			<!-- Right: Content -->
			<div>
				<AnimateOnScroll>
					<h2 class="text-3xl md:text-4xl leading-tight mb-6">
						<span class="font-medium">Your Partner in</span>
						<span class="font-serif italic block">Permit Excellence</span>
					</h2>
				</AnimateOnScroll>
				<AnimateOnScroll delay={1}>
					<div class="space-y-4 text-neutral-700 leading-relaxed">
						<p>
							Permits & More provides exceptional engineering services designed to move your
							project seamlessly from concept through design to full permit approval. We've built
							our reputation on precision, reliability, and an unwavering commitment to meeting
							your timelines.
						</p>
						<p>
							Our mission is to simplify what is often a long and complex permitting process.
							Serving the City of San Diego, the County of San Diego, and surrounding areas, we
							help make obtaining building permits faster, easier, and far less stressful for our
							clients.
						</p>
						<p>
							For over 12 years, we've been the trusted partner for architects, developers, sign
							contractors, general contractors, and homeowners throughout Southern California. In
							addition, we offer building code violation assistance, helping clients resolve
							violations and maintain full code compliance.
						</p>
					</div>
				</AnimateOnScroll>

				<!-- Quick Stats -->
				<AnimateOnScroll delay={2}>
					<div class="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-neutral-100">
						<div>
							<div class="text-3xl font-light text-brand-500">
								<StatCounter target={500} suffix="+" />
							</div>
							<div class="text-sm text-neutral-500 mt-1">Projects Completed</div>
						</div>
						<div>
							<div class="text-3xl font-light text-brand-500">
								<StatCounter target={98} suffix="%" />
							</div>
							<div class="text-sm text-neutral-500 mt-1">Approval Rate</div>
						</div>
						<div>
							<div class="text-3xl font-light text-brand-500">
								<StatCounter target={24} suffix="hr" />
							</div>
							<div class="text-sm text-neutral-500 mt-1">Response Time</div>
						</div>
					</div>
				</AnimateOnScroll>
			</div>
		</div>
	</div>
</section>

<!-- Values Section -->
<section class="py-20 lg:py-28 bg-neutral-50">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="text-center mb-16">
			<AnimateOnScroll>
				<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
					Our Values
				</p>
			</AnimateOnScroll>
			<AnimateOnScroll delay={1}>
				<h2 class="text-3xl md:text-4xl leading-tight">
					<span class="font-medium">What Drives</span>
					<span class="font-serif italic"> Our Success</span>
				</h2>
			</AnimateOnScroll>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			<AnimateOnScroll>
				<div class="bg-white rounded-2xl p-8 card-hover">
					<div class="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6">
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
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-3">Integrity</h3>
					<p class="text-neutral-600 leading-relaxed">
						We maintain the highest ethical standards in all our dealings, ensuring transparency
						and honesty with every client.
					</p>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll delay={1}>
				<div class="bg-white rounded-2xl p-8 card-hover">
					<div class="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6">
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
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-3">Efficiency</h3>
					<p class="text-neutral-600 leading-relaxed">
						Time is money. We streamline the permit process to minimize delays and keep your
						project on schedule.
					</p>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll delay={2}>
				<div class="bg-white rounded-2xl p-8 card-hover">
					<div class="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6">
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
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-3">Partnership</h3>
					<p class="text-neutral-600 leading-relaxed">
						We view every client relationship as a partnership, working collaboratively to achieve
						your project goals.
					</p>
				</div>
			</AnimateOnScroll>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 lg:py-28 bg-brand-500">
	<div class="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
		<h2 class="text-3xl md:text-4xl leading-tight mb-6">
			<span class="font-medium">Ready to Work</span>
			<span class="font-serif italic block">Together?</span>
		</h2>
		<p class="text-xl text-white/80 mb-10">
			Let's discuss how we can help streamline your permit process.
		</p>
		<a
			href="/contact"
			class="bg-white text-brand-600 hover:bg-neutral-100 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2"
		>
			Get in Touch
			<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17 8l4 4m0 0l-4 4m4-4H3"
				/>
			</svg>
		</a>
	</div>
</section>
