<script>
	import Header from '$lib/components/Header.svelte';
	import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';
	import StatCounter from '$lib/components/StatCounter.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	// All 15 reviews ordered latest to oldest
	const allReviews = [
		{ reviewId: 'ucnQJk2JXLgoVuYKde8Z4A', userId: 'gn1Z7f0RwSQ54ZpNGAjwJQ', name: 'David F.' },
		{ reviewId: 'ZlNdc20B3Qb5U9_hFE9Knw', userId: 'ZMvkcsZIJe-aekRPrBQAUA', name: 'Kellin C.' },
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

	// Split: 8 top, 7 bottom
	const topRow = allReviews.slice(0, 8);
	const bottomRow = allReviews.slice(8);

	// Duplicate for seamless looping
	const topCards = [...topRow, ...topRow];
	const bottomCards = [...bottomRow, ...bottomRow];

	// Track elements
	let topTrack;
	let bottomTrack;

	// Animation state
	const CARD_W = 400;
	const GAP = 24;
	const SPEED = 0.35;

	let topSetWidth = topRow.length * (CARD_W + GAP);
	let bottomSetWidth = bottomRow.length * (CARD_W + GAP);

	let topPos = 0;
	let bottomPos = 0;
	let topHovered = false;
	let bottomHovered = false;
	let animId;

	// Drag state
	let isDragging = false;
	let dragRow = null;
	let dragStartX = 0;
	let dragStartPos = 0;

	function animate() {
		// Top row: auto-slide right
		if (!topHovered && !(isDragging && dragRow === 'top')) {
			topPos += SPEED;
			if (topPos >= topSetWidth) topPos -= topSetWidth;
		}
		// Bottom row: auto-slide left
		if (!bottomHovered && !(isDragging && dragRow === 'bottom')) {
			bottomPos += SPEED;
			if (bottomPos >= bottomSetWidth) bottomPos -= bottomSetWidth;
		}

		if (topTrack) {
			topTrack.style.transform = `translate3d(${topPos - topSetWidth}px, 0, 0)`;
		}
		if (bottomTrack) {
			bottomTrack.style.transform = `translate3d(${-bottomPos}px, 0, 0)`;
		}

		animId = requestAnimationFrame(animate);
	}

	// Drag handlers
	function onDragStart(e, row) {
		isDragging = true;
		dragRow = row;
		dragStartX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
		dragStartPos = row === 'top' ? topPos : bottomPos;
		if (browser) document.body.style.userSelect = 'none';
	}

	function onDragMove(e) {
		if (!isDragging) return;
		e.preventDefault();
		const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
		const delta = clientX - dragStartX;

		if (dragRow === 'top') {
			topPos = dragStartPos + delta;
			topPos = ((topPos % topSetWidth) + topSetWidth) % topSetWidth;
		} else {
			bottomPos = dragStartPos - delta;
			bottomPos = ((bottomPos % bottomSetWidth) + bottomSetWidth) % bottomSetWidth;
		}
	}

	function onDragEnd() {
		isDragging = false;
		dragRow = null;
		if (browser) document.body.style.userSelect = '';
	}

	// Yelp widget loader with retries
	function loadYelpWidget() {
		const injectScript = () => {
			const existing = document.querySelectorAll('script[src*="yelp.com/embed/widgets.js"]');
			existing.forEach((el) => el.remove());
			const s = document.createElement('script');
			s.src = 'https://www.yelp.com/embed/widgets.js';
			s.type = 'text/javascript';
			s.async = true;
			document.body.appendChild(s);
		};
		// Staggered loads to catch all embeds
		setTimeout(injectScript, 300);
		setTimeout(injectScript, 2500);
		setTimeout(injectScript, 5000);
	}

	onMount(() => {
		if (browser) {
			animId = requestAnimationFrame(animate);

			window.addEventListener('mousemove', onDragMove);
			window.addEventListener('mouseup', onDragEnd);
			window.addEventListener('touchmove', onDragMove, { passive: false });
			window.addEventListener('touchend', onDragEnd);

			loadYelpWidget();
		}
	});

	onDestroy(() => {
		if (animId) cancelAnimationFrame(animId);
		if (browser) {
			window.removeEventListener('mousemove', onDragMove);
			window.removeEventListener('mouseup', onDragEnd);
			window.removeEventListener('touchmove', onDragMove);
			window.removeEventListener('touchend', onDragEnd);
		}
	});
</script>

<svelte:head>
	<title>Reviews - Permits & More</title>
	<meta
		name="description"
		content="Read real client reviews for Permits & More on Yelp. See why San Diego trusts us for expert permit processing services."
	/>
	<style>
		/* Yelp embed widget overrides */
		.yelp-review {
			display: block !important;
			width: 100% !important;
		}
		.yelp-review iframe {
			width: 100% !important;
			height: 260px !important;
			border-radius: 12px !important;
			border: none !important;
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
				<div class="flex items-center gap-3">
					<svg class="w-20 h-10" viewBox="0 0 200 100" fill="white">
						<text
							x="10"
							y="70"
							font-family="Arial Black, sans-serif"
							font-size="60"
							font-weight="900"
							letter-spacing="-2">yelp</text
						>
					</svg>
				</div>
				<div class="flex items-center gap-4">
					<div class="flex gap-1">
						{#each Array(5) as _, i}
							<svg
								class="w-7 h-7 {i < 4 ? 'text-white' : 'text-white/40'}"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						{/each}
					</div>
					<span class="text-white text-2xl font-light">4.4</span>
				</div>
				<div class="flex items-center gap-8 text-white/90">
					<div class="text-center">
						<div class="text-2xl font-semibold">15</div>
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
						<svg
							class="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
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

<!-- Sliding Reviews Carousel -->
<section class="py-20 lg:py-28 bg-white overflow-hidden">
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
	</div>

	<!-- Top Row: 8 reviews, slides RIGHT -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="relative mb-8 cursor-grab active:cursor-grabbing select-none"
		on:mouseenter={() => (topHovered = true)}
		on:mouseleave={() => {
			if (!isDragging || dragRow !== 'top') topHovered = false;
		}}
		on:mousedown={(e) => onDragStart(e, 'top')}
		on:touchstart={(e) => onDragStart(e, 'top')}
		role="region"
		aria-label="Client reviews row 1"
	>
		<div class="flex will-change-transform" style="gap:{GAP}px" bind:this={topTrack}>
			{#each topCards as review, i}
				<div
					class="flex-shrink-0 bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden flex flex-col"
					style="width:{CARD_W}px; height:300px;"
				>
					<!-- Yelp Embed -->
					<div class="flex-1 overflow-hidden p-4">
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
					</div>

					<!-- Always-visible bottom bar -->
					<div
						class="flex items-center gap-3 px-5 py-3 border-t border-neutral-200 bg-white/80 backdrop-blur-sm"
					>
						<div
							class="w-9 h-9 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
						>
							{review.name.charAt(0)}
						</div>
						<div class="flex-1 min-w-0">
							<a
								href="https://www.yelp.com/user_details?userid={review.userId}"
								target="_blank"
								rel="noopener noreferrer"
								class="text-sm font-semibold text-neutral-800 hover:text-brand-500 transition-colors truncate block"
							>
								{review.name}
							</a>
							<div class="flex gap-0.5 mt-0.5">
								{#each Array(5) as _}
									<svg class="w-3 h-3 text-[#FF1A1A]" fill="currentColor" viewBox="0 0 20 20">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
										/>
									</svg>
								{/each}
							</div>
						</div>
						<a
							href="https://www.yelp.com/biz/permits-and-more-san-diego?hrid={review.reviewId}"
							target="_blank"
							rel="noopener noreferrer"
							class="text-xs text-brand-500 hover:text-brand-700 font-semibold transition-colors flex-shrink-0 flex items-center gap-1"
						>
							<svg class="w-4 h-4 text-[#FF1A1A]" viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.116-1.854-2.404-1.854-2.404s-.27.013-.558.013c-3.644 0-8.799-2.755-8.799-8.597C6.021 6.478 10.756 2 14.832 2c4.342 0 7.147 3.476 7.147 7.008 0 2.14-.797 4.249-2.368 5.263 0 0 .248 1.391.63 2.082.246.446.694 1.076.87 1.873z"
								/>
							</svg>
							Read
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Bottom Row: 7 reviews, slides LEFT -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="relative cursor-grab active:cursor-grabbing select-none"
		on:mouseenter={() => (bottomHovered = true)}
		on:mouseleave={() => {
			if (!isDragging || dragRow !== 'bottom') bottomHovered = false;
		}}
		on:mousedown={(e) => onDragStart(e, 'bottom')}
		on:touchstart={(e) => onDragStart(e, 'bottom')}
		role="region"
		aria-label="Client reviews row 2"
	>
		<div class="flex will-change-transform" style="gap:{GAP}px" bind:this={bottomTrack}>
			{#each bottomCards as review, i}
				<div
					class="flex-shrink-0 bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden flex flex-col"
					style="width:{CARD_W}px; height:300px;"
				>
					<!-- Yelp Embed -->
					<div class="flex-1 overflow-hidden p-4">
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
					</div>

					<!-- Always-visible bottom bar -->
					<div
						class="flex items-center gap-3 px-5 py-3 border-t border-neutral-200 bg-white/80 backdrop-blur-sm"
					>
						<div
							class="w-9 h-9 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
						>
							{review.name.charAt(0)}
						</div>
						<div class="flex-1 min-w-0">
							<a
								href="https://www.yelp.com/user_details?userid={review.userId}"
								target="_blank"
								rel="noopener noreferrer"
								class="text-sm font-semibold text-neutral-800 hover:text-brand-500 transition-colors truncate block"
							>
								{review.name}
							</a>
							<div class="flex gap-0.5 mt-0.5">
								{#each Array(5) as _}
									<svg class="w-3 h-3 text-[#FF1A1A]" fill="currentColor" viewBox="0 0 20 20">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
										/>
									</svg>
								{/each}
							</div>
						</div>
						<a
							href="https://www.yelp.com/biz/permits-and-more-san-diego?hrid={review.reviewId}"
							target="_blank"
							rel="noopener noreferrer"
							class="text-xs text-brand-500 hover:text-brand-700 font-semibold transition-colors flex-shrink-0 flex items-center gap-1"
						>
							<svg class="w-4 h-4 text-[#FF1A1A]" viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.116-1.854-2.404-1.854-2.404s-.27.013-.558.013c-3.644 0-8.799-2.755-8.799-8.597C6.021 6.478 10.756 2 14.832 2c4.342 0 7.147 3.476 7.147 7.008 0 2.14-.797 4.249-2.368 5.263 0 0 .248 1.391.63 2.082.246.446.694 1.076.87 1.873z"
								/>
							</svg>
							Read
						</a>
					</div>
				</div>
			{/each}
		</div>
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
				<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
					<path
						d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.116-1.854-2.404-1.854-2.404s-.27.013-.558.013c-3.644 0-8.799-2.755-8.799-8.597C6.021 6.478 10.756 2 14.832 2c4.342 0 7.147 3.476 7.147 7.008 0 2.14-.797 4.249-2.368 5.263 0 0 .248 1.391.63 2.082.246.446.694 1.076.87 1.873z"
					/>
				</svg>
				View All Reviews on Yelp
				<svg
					class="w-4 h-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
				</svg>
			</a>
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
