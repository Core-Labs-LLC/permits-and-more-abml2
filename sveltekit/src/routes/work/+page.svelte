<script>
	import Header from '$lib/components/Header.svelte';
	import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';
	import StatCounter from '$lib/components/StatCounter.svelte';

	const projects = [
		{
			image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
			category: 'Commercial',
			title: 'Downtown Office Tower',
			location: 'San Diego, CA'
		},
		{
			image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2796&auto=format&fit=crop',
			category: 'Healthcare',
			title: 'Medical Center Expansion',
			location: 'La Jolla, CA'
		},
		{
			image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop',
			category: 'Residential',
			title: 'Luxury Home Community',
			location: 'Carlsbad, CA'
		},
		{
			image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop',
			category: 'Retail',
			title: 'Shopping Center',
			location: 'Chula Vista, CA'
		},
		{
			image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop',
			category: 'Hospitality',
			title: 'Beachfront Resort',
			location: 'Oceanside, CA'
		},
		{
			image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2676&auto=format&fit=crop',
			category: 'Industrial',
			title: 'Distribution Center',
			location: 'Escondido, CA'
		}
	];
</script>

<svelte:head>
	<title>Projects - Permits & More</title>
	<meta
		name="description"
		content="Our Projects - Permits & More showcases successful permit processing projects across San Diego and Southern California."
	/>
</svelte:head>

<Header />

<!-- Page Hero -->
<section class="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-neutral-50">
	<div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
		<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Our Work</p>
		<h1 class="text-4xl md:text-5xl lg:text-6xl leading-tight">
			<span class="font-medium">Featured</span>
			<span class="font-serif italic text-brand-500"> Projects</span>
		</h1>
		<p class="text-lg text-neutral-600 max-w-2xl mx-auto mt-6">
			We've done one thing for over 15 years: Process Permits. We take pride in our ability to
			tackle the most complex permitting challenges.
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
						<StatCounter target={24} suffix="hr" />
					</div>
					<div class="text-white/80">Response Time</div>
				</div>
			</div>
		</AnimateOnScroll>
	</div>
</section>

<!-- Projects Grid -->
<section class="py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each projects as project, index}
				<AnimateOnScroll delay={index % 3}>
					<div class="group card-hover">
						<div class="relative overflow-hidden rounded-2xl">
							<img
								src={project.image}
								alt={project.title}
								class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"
							></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<span class="text-brand-400 text-sm font-medium">{project.category}</span>
								<h3 class="text-xl font-semibold text-white mt-1">{project.title}</h3>
								<p class="text-white/70 text-sm mt-2">{project.location}</p>
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
			<span class="font-medium">Ready to Start</span>
			<span class="font-serif italic block">Your Project?</span>
		</h2>
		<p class="text-xl text-white/70 mb-10">
			Let's discuss how we can help bring your vision to life.
		</p>
		<a
			href="/contact"
			class="btn-primary text-white px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2"
		>
			Get Started Today
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
