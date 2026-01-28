<script>
	import Header from '$lib/components/Header.svelte';
	import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';
</script>

<svelte:head>
	<title>Our Approach - Permits & More</title>
	<meta
		name="description"
		content="Our Approach - Permits & More is deeply committed to our communities with regional expertise and proven track record."
	/>
</svelte:head>

<Header />

<!-- Page Hero -->
<section class="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-neutral-50">
	<div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
		<h1 class="text-4xl md:text-5xl lg:text-6xl leading-tight">
			<span class="font-medium">Our</span>
			<span class="font-serif italic text-brand-500"> Approach</span>
		</h1>
		<p class="text-lg text-neutral-600 max-w-3xl mx-auto mt-6">
			Regional experts deeply committed to our communities. We leverage regional resources and
			talent to positively impact each community we touch.
		</p>
	</div>
</section>

<!-- Content Section -->
<section class="py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
			<div>
				<AnimateOnScroll>
					<h2 class="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
						<span class="font-medium block">Regional Experts</span>
						<span class="font-serif italic text-brand-500">Deeply Committed To Our Communities</span>
					</h2>
				</AnimateOnScroll>
				<AnimateOnScroll delay={1}>
					<p class="text-lg text-neutral-700 mb-8 leading-relaxed">
						We leverage regional resources and talent to build across Southern California and
						positively impact each community we touch. Our commitment extends beyond permits to
						supporting the growth and development of the regions we serve.
					</p>
				</AnimateOnScroll>

				<div class="space-y-6">
					<AnimateOnScroll delay={2}>
						<div class="flex items-start">
							<div
								class="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
							>
								<svg
									class="w-6 h-6 text-brand-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
									/>
								</svg>
							</div>
							<div>
								<h3 class="text-xl font-bold text-neutral-900 mb-2">Local Expertise</h3>
								<p class="text-neutral-600">
									Deep knowledge of San Diego County and surrounding areas' permit requirements and
									processes.
								</p>
							</div>
						</div>
					</AnimateOnScroll>

					<AnimateOnScroll delay={3}>
						<div class="flex items-start">
							<div
								class="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
							>
								<svg
									class="w-6 h-6 text-brand-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<div>
								<h3 class="text-xl font-bold text-neutral-900 mb-2">Community Partnership</h3>
								<p class="text-neutral-600">
									Building strong relationships with local building departments and inspectors.
								</p>
							</div>
						</div>
					</AnimateOnScroll>

					<AnimateOnScroll delay={4}>
						<div class="flex items-start">
							<div
								class="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
							>
								<svg
									class="w-6 h-6 text-brand-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
									/>
								</svg>
							</div>
							<div>
								<h3 class="text-xl font-bold text-neutral-900 mb-2">Proven Track Record</h3>
								<p class="text-neutral-600">
									15+ years of successful permit processing with 98% first-time approval rate.
								</p>
							</div>
						</div>
					</AnimateOnScroll>
				</div>
			</div>

			<AnimateOnScroll>
				<div class="h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl">
					<img
						src="https://storage.googleapis.com/uxpilot-auth.appspot.com/685ed0c7a3-a1a6ee1b1ffb6486a9af.png"
						alt="San Diego community"
						class="w-full h-full object-cover"
					/>
				</div>
			</AnimateOnScroll>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 lg:py-28 bg-brand-500">
	<div class="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
		<h2 class="text-3xl md:text-4xl leading-tight mb-6">
			<span class="font-medium">Ready to Partner</span>
			<span class="font-serif italic block">With Us?</span>
		</h2>
		<p class="text-xl text-white/80 mb-10">
			Let us put our regional expertise to work for your next project.
		</p>
		<a
			href="/contact"
			class="bg-white text-brand-600 hover:bg-neutral-100 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2"
		>
			Get Started
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
