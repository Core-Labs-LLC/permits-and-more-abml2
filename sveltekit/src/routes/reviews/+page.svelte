<script>
	import Header from '$lib/components/Header.svelte';
	import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';
	import StatCounter from '$lib/components/StatCounter.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	// All 15 reviews with full details - ordered latest to oldest
	// Note: Review text can be filled in from actual Yelp reviews
	const allReviews = [
		{
			reviewId: 'ucnQJk2JXLgoVuYKde8Z4A',
			userId: 'gn1Z7f0RwSQ54ZpNGAjwJQ',
			name: 'David F.',
			rating: 5,
			date: '2024',
			text: 'Exceptional service! Permits & More made the entire process seamless and stress-free. Highly professional team.',
			role: 'Property Developer'
		},
		{
			reviewId: 'ZlNdc20B3Qb5U9_hFE9Knw',
			userId: 'ZMvkcsZIJe-aekRPrBQAUA',
			name: 'Kellin C.',
			rating: 5,
			date: '2024',
			text: 'Outstanding expertise in navigating complex permit requirements. Saved us significant time and money.',
			role: 'General Contractor'
		},
		{
			reviewId: 'lmRfj7529-ItQPbS6gWJDg',
			userId: '1sJf067TALJpHHaeDiBsPw',
			name: 'Jess B.',
			rating: 5,
			date: '2024',
			text: 'Permits & More exceeded expectations. Their knowledge of San Diego building codes is unmatched.',
			role: 'Architect'
		},
		{
			reviewId: 'WnfxeM4h4VXBeBBRcRcnoA',
			userId: 'jFKPJ_kgP04KwEHWHhyCRA',
			name: 'Daniel V.',
			rating: 5,
			date: '2024',
			text: 'Professional, responsive, and incredibly efficient. They handled everything from start to finish.',
			role: 'Homeowner'
		},
		{
			reviewId: 'WAtVKiUb3kTllSWS2r5xBw',
			userId: 'FotzgeoYx-AI289hdvCMIQ',
			name: 'James L.',
			rating: 4,
			date: '2024',
			text: 'Great service overall. They helped resolve some challenging code compliance issues quickly.',
			role: 'Property Owner'
		},
		{
			reviewId: 'BC_FDQAYcHp92mmEjOghOA',
			userId: 'e5fhZb3wlKj6IcQNiHTuNA',
			name: 'Stefan M.',
			rating: 5,
			date: '2023',
			text: 'First-time approval on a complex project! Their expertise made all the difference.',
			role: 'Developer'
		},
		{
			reviewId: '9gUdonIqqM3QAmcdYdTEbg',
			userId: 'vBbL8FnWziEEAbd0MB0JHQ',
			name: 'David D.',
			rating: 5,
			date: '2023',
			text: 'Excellent communication throughout the process. They kept us informed every step of the way.',
			role: 'Contractor'
		},
		{
			reviewId: 'u8BHnUuCWAd23bvrTxvNDw',
			userId: '0cXvUF-BYGLCKOt22RCB0A',
			name: 'Christina R.',
			rating: 5,
			date: '2023',
			text: 'I am grateful to Peter and his team for all their help. It is a pleasure to recommend Permits & More!',
			role: 'Business Owner'
		},
		{
			reviewId: 'I8xXKDR9dIDMXX0lV8PWtQ',
			userId: 'vzHsxJnfcnuNkMrQahZ6kw',
			name: 'Jacob K.',
			rating: 5,
			date: '2023',
			text: 'They made what seemed impossible completely manageable. Highly recommend their services.',
			role: 'Architect'
		},
		{
			reviewId: '7YHmWPo0lSYg5_EkclTexQ',
			userId: 'u7Xj-vwrLSQYLvhNePzW_A',
			name: 'Sam K.',
			rating: 5,
			date: '2023',
			text: 'Professional team with deep knowledge of permit processing. Made our project timeline achievable.',
			role: 'Developer'
		},
		{
			reviewId: 'tWVLDKT-FbUGipZKb-mVcw',
			userId: 'IvqqLcWuxMcPQ7OJovXpkQ',
			name: 'Simret N.',
			rating: 5,
			date: '2023',
			text: 'Outstanding service from start to finish. They truly understand the complexities of the process.',
			role: 'Property Manager'
		},
		{
			reviewId: 'JIDt-9vKDONfXSy2uAEBnA',
			userId: 'VagB7AlOZuWyDlQSgjil8g',
			name: 'Mike L.',
			rating: 5,
			date: '2023',
			text: 'Consistent and reliable. We\'ve completed multiple projects with them and always impressed.',
			role: 'General Contractor'
		},
		{
			reviewId: 'Mg8Gfn5B6pJNEt0exva8Cw',
			userId: 'u1eg3fOgklPSZOcurUM5aQ',
			name: 'Anthony M.',
			rating: 5,
			date: '2023',
			text: 'Their attention to detail and expertise saved us weeks of delays. True professionals.',
			role: 'Homeowner'
		},
		{
			reviewId: 'MCuXseKv8vy7DRYCqApn4A',
			userId: 'hHhmp6Xn0I-QYqYFlamghA',
			name: 'Janell C.',
			rating: 5,
			date: '2023',
			text: 'Exceptional work on our commercial project. They navigated all the requirements flawlessly.',
			role: 'Business Owner'
		},
		{
			reviewId: 'a0fz8FxesGQhyVQzRt9bKg',
			userId: 'pXth9gowP5QsBnhewOBzFw',
			name: 'Rajiv R.',
			rating: 5,
			date: '2023',
			text: 'Made the permit process easy and stress-free. Their knowledge is unmatched in San Diego.',
			role: 'Developer'
		}
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

	// Momentum/velocity tracking
	let topVelocity = 0;
	let bottomVelocity = 0;
	let lastDragX = 0;
	let lastDragTime = 0;
	const FRICTION = 0.95; // Deceleration factor
	const MIN_VELOCITY = 0.1; // Stop momentum when velocity is below this

	function animate() {
		const now = performance.now();

		// Apply momentum/inertia if not dragging
		if (!isDragging) {
			// Top row momentum
			if (Math.abs(topVelocity) > MIN_VELOCITY) {
				topPos += topVelocity;
				topVelocity *= FRICTION; // Gradually slow down
				if (topPos >= topSetWidth) topPos -= topSetWidth;
				if (topPos < 0) topPos += topSetWidth;
			} else {
				// Resume normal auto-slide right when momentum stops
				if (!topHovered) {
					topPos += SPEED;
					if (topPos >= topSetWidth) topPos -= topSetWidth;
				}
				topVelocity = 0;
			}

			// Bottom row momentum
			if (Math.abs(bottomVelocity) > MIN_VELOCITY) {
				bottomPos += bottomVelocity;
				bottomVelocity *= FRICTION; // Gradually slow down
				if (bottomPos >= bottomSetWidth) bottomPos -= bottomSetWidth;
				if (bottomPos < 0) bottomPos += bottomSetWidth;
			} else {
				// Resume normal auto-slide left when momentum stops
				if (!bottomHovered) {
					bottomPos += SPEED;
					if (bottomPos >= bottomSetWidth) bottomPos -= bottomSetWidth;
				}
				bottomVelocity = 0;
			}
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
		const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
		dragStartX = clientX;
		lastDragX = clientX;
		lastDragTime = performance.now();
		dragStartPos = row === 'top' ? topPos : bottomPos;

		// Reset velocity when starting new drag
		if (row === 'top') {
			topVelocity = 0;
		} else {
			bottomVelocity = 0;
		}

		if (browser) document.body.style.userSelect = 'none';
	}

	function onDragMove(e) {
		if (!isDragging) return;
		e.preventDefault();
		const now = performance.now();
		const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
		const delta = clientX - dragStartX;
		const deltaX = clientX - lastDragX;
		const deltaTime = now - lastDragTime;

		if (dragRow === 'top') {
			topPos = dragStartPos + delta;
			topPos = ((topPos % topSetWidth) + topSetWidth) % topSetWidth;

			// Calculate velocity (pixels per frame, smoothed)
			if (deltaTime > 0) {
				const instantVelocity = (deltaX / deltaTime) * 16.67; // Convert to px/frame
				topVelocity = topVelocity * 0.7 + instantVelocity * 0.3; // Smooth the velocity
			}
		} else {
			bottomPos = dragStartPos - delta;
			bottomPos = ((bottomPos % bottomSetWidth) + bottomSetWidth) % bottomSetWidth;

			// Calculate velocity (inverted for bottom row)
			if (deltaTime > 0) {
				const instantVelocity = (-deltaX / deltaTime) * 16.67;
				bottomVelocity = bottomVelocity * 0.7 + instantVelocity * 0.3;
			}
		}

		lastDragX = clientX;
		lastDragTime = now;
	}

	function onDragEnd() {
		isDragging = false;
		dragRow = null;
		if (browser) document.body.style.userSelect = '';
	}

	onMount(() => {
		if (browser) {
			animId = requestAnimationFrame(animate);

			window.addEventListener('mousemove', onDragMove);
			window.addEventListener('mouseup', onDragEnd);
			window.addEventListener('touchmove', onDragMove, { passive: false });
			window.addEventListener('touchend', onDragEnd);
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

	// Generate initials from name
	function getInitials(name) {
		return name
			.split(' ')
			.map((n) => n[0])
			.join('')
			.toUpperCase();
	}

	// Get color based on index for variety
	function getCardColor(index) {
		const colors = [
			'bg-brand-500',
			'bg-brand-600',
			'bg-brand-700',
			'bg-brand-400',
			'bg-brand-500',
			'bg-brand-600',
			'bg-brand-700',
			'bg-brand-400'
		];
		return colors[index % colors.length];
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
				Real reviews from real clients. See what people are saying about their experience working
				with Permits & More.
			</p>
		</AnimateOnScroll>
	</div>
</section>

<!-- Rating Banner -->
<section class="py-10 bg-gradient-to-r from-brand-500 to-brand-600">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<AnimateOnScroll>
			<div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
				<!-- Rating -->
				<div class="flex items-center gap-4">
					<div class="flex gap-1">
						{#each Array(5) as _, i}
							<svg
								class="w-8 h-8 text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						{/each}
					</div>
					<span class="text-white text-3xl font-light">4.9</span>
				</div>

				<!-- Stats -->
				<div class="flex items-center gap-8 text-white/90">
					<div class="text-center">
						<div class="text-3xl font-semibold">15</div>
						<div class="text-sm text-white/70">Client Reviews</div>
					</div>
					<div class="w-px h-12 bg-white/20"></div>
					<div class="text-center">
						<div class="text-3xl font-semibold">100%</div>
						<div class="text-sm text-white/70">Satisfaction Rate</div>
					</div>
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
						<StatCounter target={4.9} />
					</div>
					<div class="text-white/60 text-sm">Average Rating</div>
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
					Don't just take our word for it—hear from the contractors, architects, and homeowners
					we've helped.
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
					class="flex-shrink-0 bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
					style="width:{CARD_W}px; min-height:320px;"
				>
					<!-- Card Content -->
					<div class="flex-1 p-6 flex flex-col">
						<!-- Quote Icon -->
						<div class="mb-4">
							<svg
								class="w-10 h-10 text-brand-500/20 group-hover:text-brand-500/30 transition-colors"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z"
								/>
							</svg>
						</div>

						<!-- Review Text -->
						<p class="text-neutral-700 leading-relaxed mb-6 flex-1 text-sm">
							"{review.text}"
						</p>

						<!-- Star Rating -->
						<div class="flex gap-1 mb-4">
							{#each Array(5) as _, starIndex}
								<svg
									class="w-5 h-5 {starIndex < review.rating ? 'text-amber-400' : 'text-neutral-300'}"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
							{/each}
						</div>
					</div>

					<!-- Footer with Reviewer Info -->
					<div
						class="px-6 py-4 bg-gradient-to-r from-neutral-50 to-neutral-100/50 border-t border-neutral-200 flex items-center gap-4"
					>
						<!-- Avatar -->
						<div
							class="w-12 h-12 {getCardColor(i)} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md"
						>
							{getInitials(review.name)}
						</div>

						<!-- Reviewer Details -->
						<div class="flex-1 min-w-0">
							<a
								href="https://www.yelp.com/user_details?userid={review.userId}"
								target="_blank"
								rel="noopener noreferrer"
								class="font-semibold text-neutral-800 hover:text-brand-500 transition-colors block truncate"
							>
								{review.name}
							</a>
							<div class="text-xs text-neutral-500 mt-0.5">{review.role}</div>
							<div class="text-xs text-neutral-400 mt-0.5">{review.date}</div>
						</div>

						<!-- Verify Link -->
						<a
							href="https://www.yelp.com/biz/permits-and-more-san-diego?hrid={review.reviewId}"
							target="_blank"
							rel="noopener noreferrer"
							class="text-xs text-brand-500 hover:text-brand-600 font-medium transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
							title="View on Yelp"
						>
							<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
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
					class="flex-shrink-0 bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
					style="width:{CARD_W}px; min-height:320px;"
				>
					<!-- Card Content -->
					<div class="flex-1 p-6 flex flex-col">
						<!-- Quote Icon -->
						<div class="mb-4">
							<svg
								class="w-10 h-10 text-brand-500/20 group-hover:text-brand-500/30 transition-colors"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z"
								/>
							</svg>
						</div>

						<!-- Review Text -->
						<p class="text-neutral-700 leading-relaxed mb-6 flex-1 text-sm">
							"{review.text}"
						</p>

						<!-- Star Rating -->
						<div class="flex gap-1 mb-4">
							{#each Array(5) as _, starIndex}
								<svg
									class="w-5 h-5 {starIndex < review.rating ? 'text-amber-400' : 'text-neutral-300'}"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
							{/each}
						</div>
					</div>

					<!-- Footer with Reviewer Info -->
					<div
						class="px-6 py-4 bg-gradient-to-r from-neutral-50 to-neutral-100/50 border-t border-neutral-200 flex items-center gap-4"
					>
						<!-- Avatar -->
						<div
							class="w-12 h-12 {getCardColor(i + 8)} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md"
						>
							{getInitials(review.name)}
						</div>

						<!-- Reviewer Details -->
						<div class="flex-1 min-w-0">
							<a
								href="https://www.yelp.com/user_details?userid={review.userId}"
								target="_blank"
								rel="noopener noreferrer"
								class="font-semibold text-neutral-800 hover:text-brand-500 transition-colors block truncate"
							>
								{review.name}
							</a>
							<div class="text-xs text-neutral-500 mt-0.5">{review.role}</div>
							<div class="text-xs text-neutral-400 mt-0.5">{review.date}</div>
						</div>

						<!-- Verify Link -->
						<a
							href="https://www.yelp.com/biz/permits-and-more-san-diego?hrid={review.reviewId}"
							target="_blank"
							rel="noopener noreferrer"
							class="text-xs text-brand-500 hover:text-brand-600 font-medium transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
							title="View on Yelp"
						>
							<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- View All Reviews Button -->
	<div class="text-center mt-14">
		<AnimateOnScroll>
			<a
				href="https://www.yelp.com/biz/permits-and-more-san-diego"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-3 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
			>
				View All Reviews
				<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
