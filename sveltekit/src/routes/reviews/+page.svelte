<script>
	import Header from '$lib/components/Header.svelte';
	import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';
	import StatCounter from '$lib/components/StatCounter.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const yelpReviews = [
		{ reviewId: 'lmRfj7529-ItQPbS6gWJDg', userId: '1sJf067TALJpHHaeDiBsPw', name: 'Jess B.' },
		{ reviewId: 'WnfxeM4h4VXBeBBRcRcnoA', userId: 'jFKPJ_kgP04KwEHWHhyCRA', name: 'Daniel V.' },
		{ reviewId: 'WAtVKiUb3kTllSWS2r5xBw', userId: 'FotzgeoYx-AI289hdvCMIQ', name: 'James L.' },
		{ reviewId: 'BC_FDQAYcHp92mmEjOghOA', userId: 'e5fhZb3wlKj6IcQNiHTuNA', name: 'Stefan M.' },
		{ reviewId: '9gUdonIqqM3QAmcdYdTEbg', userId: 'vBbL8FnWziEEAbd0MB0JHQ', name: 'David D.' },
		{ reviewId: 'u8BHnUuCWAd23bvrTxvNDw', userId: '0cXvUF-BYGLCKOt22RCB0A', name: 'Christina R.' },
		{ reviewId: 'I8xXKDR9dIDMXX0lV8PWtQ', userId: 'vzHsxJnfcnuNkMrQahZ6kw', name: 'Jacob K.' },
		{ reviewId: '7YHmWPo0lSYg5_EkclTexQ', userId: 'u7Xj-vwrLSQYLvhNePzW_A', name: 'Sam K.' },
		{ reviewId: 'tWVLDKT-FbUGipZKb-mVcw', userId: 'IvqqLcWuxMcPQ7OJovXpkQ', name: 'Simret N.' },
		{ reviewId: 'JIDt-9vKDONfXSy2uAEBnA', userId: 'VagB7AlOZuWyDlQSgjil8g', name: 'Mike L.' },
		{ reviewId: 'Mg8Gfn5B6pJNEt0exva8Cw', userId: 'u1eg3fOgklPSZOcurUM5aQ', name: 'Anthony M.' },
		{ reviewId: 'MCuXseKv8vy7DRYCqApn4A', userId: 'hHhmp6Xn0I-QYqYFlamghA', name: 'Janell C.' },
		{ reviewId: 'a0fz8FxesGQhyVQzRt9bKg', userId: 'pXth9gowP5QsBnhewOBzFw', name: 'Rajiv R.' }
	];

	let widgetLoaded = false;

	onMount(() => {
		if (browser) {
			loadYelpWidget();
		}
	});

	function loadYelpWidget() {
		// Remove any existing yelp widget scripts to avoid duplicates
		const existing = document.querySelectorAll('script[src*="yelp.com/embed/widgets.js"]');
		existing.forEach((el) => el.remove());

		const script = document.createElement('script');
		script.src = 'https://www.yelp.com/embed/widgets.js';
		script.type = 'text/javascript';
		script.async = true;
		script.onload = () => {
			widgetLoaded = true;
		};
		document.body.appendChild(script);
	}
</script>

<svelte:head>
	<title>Reviews - Permits & More</title>
	<meta
		name="description"
		content="Read real client reviews for Permits & More on Yelp. See why San Diego trusts us for expert permit processing services."
	/>
	<style>
		/* Yelp embed widget overrides for consistent styling */
		.yelp-review {
			display: block !important;
			width: 100% !important;
		}
		.yelp-review iframe {
			width: 100% !important;
			border-radius: 12px !important;
			border: none !important;
		}
		.review-embed-card {
			transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
		}
		.review-embed-card:hover {
			transform: translateY(-4px);
			box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.12);
		}
	</style>
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
				Real reviews from real clients. See what people are saying about their experience working
				with Permits & More on Yelp.
			</p>
		</AnimateOnScroll>
	</div>
</section>

<!-- Yelp Rating Banner -->
<section class="py-10 bg-brand-500">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<AnimateOnScroll>
			<div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
				<!-- Yelp Logo -->
				<div class="flex items-center gap-3">
					<svg class="w-20 h-10" viewBox="0 0 200 100" fill="white">
						<text x="10" y="70" font-family="Arial Black, sans-serif" font-size="60" font-weight="900" letter-spacing="-2">yelp</text>
					</svg>
				</div>

				<!-- Rating -->
				<div class="flex items-center gap-4">
					<div class="flex gap-1">
						{#each Array(5) as _, i}
							<svg class="w-7 h-7 {i < 4 ? 'text-white' : 'text-white/40'}" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						{/each}
					</div>
					<span class="text-white text-2xl font-light">4.4</span>
				</div>

				<!-- Stats -->
				<div class="flex items-center gap-8 text-white/90">
					<div class="text-center">
						<div class="text-2xl font-semibold">13</div>
						<div class="text-sm text-white/70">Reviews</div>
					</div>
					<div class="w-px h-10 bg-white/20"></div>
					<a
						href="https://www.yelp.com/biz/permits-and-more-san-diego"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm font-medium text-white hover:text-white/80 transition-colors flex items-center gap-2"
					>
						View on Yelp
						<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</a>
				</div>
			</div>
		</AnimateOnScroll>
	</div>
</section>

<!-- Stats Bar -->
<section class="py-12 bg-neutral-950">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<AnimateOnScroll>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
				<div>
					<div class="text-4xl md:text-5xl font-light mb-2">
						<StatCounter target={500} suffix="+" />
					</div>
					<div class="text-white/60 text-sm">Projects Completed</div>
				</div>
				<div>
					<div class="text-4xl md:text-5xl font-light mb-2">
						<StatCounter target={98} suffix="%" />
					</div>
					<div class="text-white/60 text-sm">Approval Rate</div>
				</div>
				<div>
					<div class="text-4xl md:text-5xl font-light mb-2">
						<StatCounter target={12} suffix="+" />
					</div>
					<div class="text-white/60 text-sm">Years Experience</div>
				</div>
				<div>
					<div class="text-4xl md:text-5xl font-light mb-2">
						<StatCounter target={4.4} />
					</div>
					<div class="text-white/60 text-sm">Yelp Rating</div>
				</div>
			</div>
		</AnimateOnScroll>
	</div>
</section>

<!-- Yelp Reviews Grid -->
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
					Every review below is pulled directly from our verified Yelp page. Click any review to
					see the full details on Yelp.
				</p>
			</AnimateOnScroll>
		</div>

		<!-- Reviews Masonry Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each yelpReviews as review, index}
				<AnimateOnScroll delay={index % 3}>
					<div class="review-embed-card bg-neutral-50 rounded-2xl p-5 border border-neutral-100">
						<!-- Yelp Embed Widget -->
						<span
							class="yelp-review"
							data-review-id={review.reviewId}
							data-hostname="www.yelp.com"
						>
							Read <a
								href="https://www.yelp.com/user_details?userid={review.userId}"
								rel="nofollow noopener"
								target="_blank">{review.name}</a
							>'s
							<a
								href="https://www.yelp.com/biz/permits-and-more-san-diego?hrid={review.reviewId}"
								rel="nofollow noopener"
								target="_blank">review</a
							>
							of
							<a
								href="https://www.yelp.com/biz/DkkCRzqyZHy6HHWK9o1LHA"
								rel="nofollow noopener"
								target="_blank">Permits and More</a
							>
							on <a href="https://www.yelp.com" rel="nofollow noopener" target="_blank">Yelp</a>
						</span>

						<!-- Fallback content visible until widget loads -->
						{#if !widgetLoaded}
							<div class="flex items-center gap-3 mt-3 pt-3 border-t border-neutral-200">
								<div class="w-9 h-9 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
									{review.name.charAt(0)}
								</div>
								<div class="flex-1 min-w-0">
									<a
										href="https://www.yelp.com/user_details?userid={review.userId}"
										target="_blank"
										rel="noopener noreferrer"
										class="text-sm font-semibold text-neutral-800 hover:text-brand-500 transition-colors"
									>
										{review.name}
									</a>
								</div>
								<a
									href="https://www.yelp.com/biz/permits-and-more-san-diego?hrid={review.reviewId}"
									target="_blank"
									rel="noopener noreferrer"
									class="text-xs text-brand-500 hover:text-brand-600 font-medium transition-colors flex-shrink-0"
								>
									Read on Yelp &rarr;
								</a>
							</div>
						{/if}
					</div>
				</AnimateOnScroll>
			{/each}
		</div>

		<!-- View All on Yelp Button -->
		<div class="text-center mt-14">
			<AnimateOnScroll>
				<a
					href="https://www.yelp.com/biz/permits-and-more-san-diego"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-3 px-8 py-4 bg-[#FF1A1A] hover:bg-[#D00000] text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
				>
					<!-- Yelp Burst Icon -->
					<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12.762 7.625c.067-.34-.12-.696-.48-.696H5.718c-.474 0-.758.473-.53.863l3.375 5.748c.2.342.694.35.906.014l3.293-5.93zM10.658 15.058l-3.262-5.95c-.2-.343-.695-.35-.907-.014L3.196 14.99c-.227.39.057.863.53.863h6.565c.474 0 .566-.452.367-.795zM14.256 14.494l-5.748 3.375c-.39.228-.39.756 0 .985l5.748 3.375c.342.2.78-.02.78-.42V14.914c0-.4-.438-.62-.78-.42zM15.17 12.83l5.748-3.375c.39-.228.39-.756 0-.985L15.17 5.095c-.342-.2-.78.02-.78.42v6.896c0 .4.438.62.78.42z"/>
					</svg>
					View All Reviews on Yelp
					<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
					</svg>
				</a>
			</AnimateOnScroll>
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
