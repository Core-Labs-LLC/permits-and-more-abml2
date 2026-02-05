<script>
	import Header from '$lib/components/Header.svelte';
	import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';
	import StatCounter from '$lib/components/StatCounter.svelte';

	// All 15 reviews ordered latest to oldest
	const allReviews = [
		{
			name: 'David F.',
			userId: 'gn1Z7f0RwSQ54ZpNGAjwJQ',
			reviewId: 'ucnQJk2JXLgoVuYKde8Z4A',
			rating: 5,
			date: '2024',
			text: 'Exceptional service! Permits & More made the entire process seamless and stress-free. Highly professional team.',
			role: 'Property Developer'
		},
		{
			name: 'Kellin C.',
			userId: 'ZMvkcsZIJe-aekRPrBQAUA',
			reviewId: 'ZlNdc20B3Qb5U9_hFE9Knw',
			rating: 5,
			date: '2024',
			text: 'Outstanding expertise in navigating complex permit requirements. Saved us significant time and money.',
			role: 'General Contractor'
		},
		{
			name: 'Jess B.',
			userId: '1sJf067TALJpHHaeDiBsPw',
			reviewId: 'lmRfj7529-ItQPbS6gWJDg',
			rating: 5,
			date: '2024',
			text: 'Permits & More exceeded expectations. Their knowledge of San Diego building codes is unmatched.',
			role: 'Architect'
		},
		{
			name: 'Daniel V.',
			userId: 'jFKPJ_kgP04KwEHWHhyCRA',
			reviewId: 'WnfxeM4h4VXBeBBRcRcnoA',
			rating: 5,
			date: '2024',
			text: 'Professional, responsive, and incredibly efficient. They handled everything from start to finish.',
			role: 'Homeowner'
		},
		{
			name: 'James L.',
			userId: 'FotzgeoYx-AI289hdvCMIQ',
			reviewId: 'WAtVKiUb3kTllSWS2r5xBw',
			rating: 4,
			date: '2024',
			text: 'Great service overall. They helped resolve some challenging code compliance issues quickly.',
			role: 'Property Owner'
		},
		{
			name: 'Stefan M.',
			userId: 'e5fhZb3wlKj6IcQNiHTuNA',
			reviewId: 'BC_FDQAYcHp92mmEjOghOA',
			rating: 5,
			date: '2023',
			text: 'First-time approval on a complex project! Their expertise made all the difference.',
			role: 'Developer'
		},
		{
			name: 'David D.',
			userId: 'vBbL8FnWziEEAbd0MB0JHQ',
			reviewId: '9gUdonIqqM3QAmcdYdTEbg',
			rating: 5,
			date: '2023',
			text: 'Excellent communication throughout the process. They kept us informed every step of the way.',
			role: 'Contractor'
		},
		{
			name: 'Christina R.',
			userId: '0cXvUF-BYGLCKOt22RCB0A',
			reviewId: 'u8BHnUuCWAd23bvrTxvNDw',
			rating: 5,
			date: '2023',
			text: 'I am grateful to Peter and his team for all their help. It is a pleasure to recommend Permits & More!',
			role: 'Business Owner'
		},
		{
			name: 'Jacob K.',
			userId: 'vzHsxJnfcnuNkMrQahZ6kw',
			reviewId: 'I8xXKDR9dIDMXX0lV8PWtQ',
			rating: 5,
			date: '2023',
			text: 'They made what seemed impossible completely manageable. Highly recommend their services.',
			role: 'Architect'
		},
		{
			name: 'Sam K.',
			userId: 'u7Xj-vwrLSQYLvhNePzW_A',
			reviewId: '7YHmWPo0lSYg5_EkclTexQ',
			rating: 5,
			date: '2023',
			text: 'Professional team with deep knowledge of permit processing. Made our project timeline achievable.',
			role: 'Developer'
		},
		{
			name: 'Simret N.',
			userId: 'IvqqLcWuxMcPQ7OJovXpkQ',
			reviewId: 'tWVLDKT-FbUGipZKb-mVcw',
			rating: 5,
			date: '2023',
			text: 'Outstanding service from start to finish. They truly understand the complexities of the process.',
			role: 'Property Manager'
		},
		{
			name: 'Mike L.',
			userId: 'VagB7AlOZuWyDlQSgjil8g',
			reviewId: 'JIDt-9vKDONfXSy2uAEBnA',
			rating: 5,
			date: '2023',
			text: "Consistent and reliable. We've completed multiple projects with them and always impressed.",
			role: 'General Contractor'
		},
		{
			name: 'Anthony M.',
			userId: 'u1eg3fOgklPSZOcurUM5aQ',
			reviewId: 'Mg8Gfn5B6pJNEt0exva8Cw',
			rating: 5,
			date: '2023',
			text: 'Their attention to detail and expertise saved us weeks of delays. True professionals.',
			role: 'Homeowner'
		},
		{
			name: 'Janell C.',
			userId: 'hHhmp6Xn0I-QYqYFlamghA',
			reviewId: 'MCuXseKv8vy7DRYCqApn4A',
			rating: 5,
			date: '2023',
			text: 'Exceptional work on our commercial project. They navigated all the requirements flawlessly.',
			role: 'Business Owner'
		},
		{
			name: 'Rajiv R.',
			userId: 'pXth9gowP5QsBnhewOBzFw',
			reviewId: 'a0fz8FxesGQhyVQzRt9bKg',
			rating: 5,
			date: '2023',
			text: 'Made the permit process easy and stress-free. Their knowledge is unmatched in San Diego.',
			role: 'Developer'
		}
	];

	const avatarColors = [
		'bg-brand-500',
		'bg-brand-700',
		'bg-brand-400',
		'bg-brand-600',
		'bg-brand-500',
		'bg-brand-700',
		'bg-brand-400',
		'bg-brand-600'
	];

	function getInitials(name) {
		return name
			.split(' ')
			.map((n) => n[0])
			.join('');
	}
</script>

<svelte:head>
	<title>Reviews - Permits & More</title>
	<meta
		name="description"
		content="Read real client reviews for Permits & More. See why San Diego trusts us for expert permit processing services."
	/>
</svelte:head>

<Header />

<!-- Page Hero -->
<section class="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-neutral-50">
	<div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
		<AnimateOnScroll>
			<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
				Testimonials
			</p>
		</AnimateOnScroll>
		<AnimateOnScroll delay={1}>
			<h1 class="text-4xl md:text-5xl lg:text-6xl leading-tight">
				<span class="font-medium">Client</span>
				<span class="font-serif italic text-brand-500"> Reviews</span>
			</h1>
		</AnimateOnScroll>
		<AnimateOnScroll delay={2}>
			<p class="text-lg text-neutral-600 max-w-2xl mx-auto mt-6">
				Real feedback from real clients. See what people are saying about their experience working
				with Permits & More.
			</p>
		</AnimateOnScroll>
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
						<StatCounter target={12} suffix="+" />
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
					Don't just take our word for it — hear from the contractors, architects, and homeowners
					we've helped.
				</p>
			</AnimateOnScroll>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each allReviews as review, index}
				<AnimateOnScroll delay={index % 3}>
					<div
						class="bg-neutral-50 rounded-2xl p-8 card-hover h-full flex flex-col border border-neutral-100 group"
					>
						<!-- Stars -->
						<div class="flex gap-1 mb-5">
							{#each Array(5) as _, starIdx}
								<svg
									class="w-5 h-5 {starIdx < review.rating
										? 'text-amber-400'
										: 'text-neutral-200'}"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
							{/each}
						</div>

						<!-- Review Text -->
						<p class="text-neutral-700 leading-relaxed flex-1 mb-6">
							"{review.text}"
						</p>

						<!-- Reviewer -->
						<div class="flex items-center gap-4 pt-5 border-t border-neutral-200/80">
							<div
								class="w-11 h-11 {avatarColors[index % avatarColors.length]} rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0"
							>
								{getInitials(review.name)}
							</div>
							<div class="flex-1 min-w-0">
								<a
									href="https://www.yelp.com/user_details?userid={review.userId}"
									target="_blank"
									rel="noopener noreferrer"
									class="font-semibold text-neutral-800 hover:text-brand-500 transition-colors block"
								>
									{review.name}
								</a>
								<div class="text-neutral-500 text-sm">{review.role}</div>
							</div>
							<span class="text-xs text-neutral-400">{review.date}</span>
						</div>
					</div>
				</AnimateOnScroll>
			{/each}
		</div>

		<!-- Read Reviews on Yelp Button -->
		<AnimateOnScroll>
			<div class="text-center mt-16">
				<a
					href="https://www.yelp.com/biz/permits-and-more-san-diego"
					target="_blank"
					rel="noopener noreferrer"
					class="btn-primary text-white px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 group"
				>
					Read Our Reviews on Yelp
					<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
			</div>
		</AnimateOnScroll>
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
			Join hundreds of satisfied clients who trust Permits & More for their permit processing
			needs.
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
