<script>
	import Header from '$lib/components/Header.svelte';
	import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';
	import StatCounter from '$lib/components/StatCounter.svelte';

	const reviews = [
		{
			text: "Permits & More made what seemed like an impossible permitting process completely manageable. Their expertise saved us weeks of delays and countless headaches. Highly recommend!",
			initials: 'JM',
			name: 'John Martinez',
			role: 'General Contractor, San Diego',
			color: 'bg-brand-500'
		},
		{
			text: "As an architect, I've worked with many permit expeditors, but Permits & More stands out for their professionalism and attention to detail. They truly understand the complexities of the process.",
			initials: 'SK',
			name: 'Sarah Kim',
			role: 'Architect, La Jolla',
			color: 'bg-brand-700'
		},
		{
			text: 'We had a code violation issue that seemed impossible to resolve. The team at Permits & More navigated us through the entire process and got us back in compliance quickly.',
			initials: 'RP',
			name: 'Robert Patterson',
			role: 'Property Owner, Carlsbad',
			color: 'bg-brand-400'
		},
		{
			text: "First-time approval on a complex commercial project! Their knowledge of San Diego building codes is unmatched. They've become our go-to for all permit needs.",
			initials: 'MT',
			name: 'Maria Torres',
			role: 'Developer, Downtown SD',
			color: 'bg-brand-500'
		},
		{
			text: 'The communication throughout the process was exceptional. They kept us updated every step of the way and were always available to answer questions. True professionals!',
			initials: 'DL',
			name: 'David Lee',
			role: 'Homeowner, Chula Vista',
			color: 'bg-brand-700'
		},
		{
			text: "We've completed over 20 projects with Permits & More. Their consistency and reliability are unmatched in the industry. They make permit processing look easy!",
			initials: 'AC',
			name: 'Amanda Chen',
			role: 'Sign Contractor, Oceanside',
			color: 'bg-brand-400'
		}
	];
</script>

<svelte:head>
	<title>Reviews - Permits & More</title>
	<meta
		name="description"
		content="Reviews - Read what our clients say about Permits & More's expert permit processing services in San Diego."
	/>
</svelte:head>

<Header />

<!-- Page Hero -->
<section class="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-neutral-50">
	<div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
		<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Testimonials</p>
		<h1 class="text-4xl md:text-5xl lg:text-6xl leading-tight">
			<span class="font-medium">Client</span>
			<span class="font-serif italic text-brand-500"> Reviews</span>
		</h1>
		<p class="text-lg text-neutral-600 max-w-2xl mx-auto mt-6">
			See what our clients have to say about working with Permits & More.
		</p>
	</div>
</section>

<!-- Stats Bar -->
<section class="py-12 bg-brand-500">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<AnimateOnScroll>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
				<div>
					<div class="text-4xl md:text-5xl font-light mb-2">
						<StatCounter target={500} suffix="+" />
					</div>
					<div class="text-white/80">Projects Completed</div>
				</div>
				<div>
					<div class="text-4xl md:text-5xl font-light mb-2">
						<StatCounter target={98} suffix="%" />
					</div>
					<div class="text-white/80">Approval Rate</div>
				</div>
				<div>
					<div class="text-4xl md:text-5xl font-light mb-2">
						<StatCounter target={5} suffix="+" />
					</div>
					<div class="text-white/80">Years Experience</div>
				</div>
				<div>
					<div class="text-4xl md:text-5xl font-light mb-2">
						<StatCounter target={4.9} />
					</div>
					<div class="text-white/80">Average Rating</div>
				</div>
			</div>
		</AnimateOnScroll>
	</div>
</section>

<!-- Reviews Grid -->
<section class="py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="text-center mb-16">
			<AnimateOnScroll>
				<h2 class="text-3xl md:text-4xl leading-tight">
					<span class="font-medium">What Our</span>
					<span class="font-serif italic"> Clients Say</span>
				</h2>
			</AnimateOnScroll>
			<AnimateOnScroll delay={1}>
				<p class="text-neutral-600 max-w-2xl mx-auto mt-4">
					Don't just take our word for it - hear from the contractors, architects, and homeowners
					we've helped.
				</p>
			</AnimateOnScroll>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each reviews as review, index}
				<AnimateOnScroll delay={index % 3}>
					<div class="bg-neutral-50 rounded-2xl p-8 card-hover">
						<div class="flex gap-1 text-amber-400 mb-4">
							{#each Array(5) as _}
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
							{/each}
						</div>
						<p class="text-neutral-700 leading-relaxed mb-6">"{review.text}"</p>
						<div class="flex items-center">
							<div
								class="w-12 h-12 {review.color} rounded-full flex items-center justify-center text-white font-semibold mr-4"
							>
								{review.initials}
							</div>
							<div>
								<div class="font-semibold">{review.name}</div>
								<div class="text-neutral-500 text-sm">{review.role}</div>
							</div>
						</div>
					</div>
				</AnimateOnScroll>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 lg:py-28 bg-neutral-950 text-white">
	<div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
		<h2 class="text-3xl md:text-4xl leading-tight mb-6">
			<span class="font-medium">Ready to Experience</span>
			<span class="font-serif italic block">the Difference?</span>
		</h2>
		<p class="text-xl text-white/70 mb-10">
			Join hundreds of satisfied clients who trust Permits & More for their permit processing needs.
		</p>
		<a
			href="/contact"
			class="btn-primary text-white px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2"
		>
			Start Your Project Today
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
