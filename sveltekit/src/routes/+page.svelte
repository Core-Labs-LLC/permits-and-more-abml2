<script>
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';
	import StatCounter from '$lib/components/StatCounter.svelte';

	let heroBgTransform = 'translateY(0px)';
	let imgRevealed = false;

	// Contact form state
	let formData = { name: '', email: '', phone: '', projectType: '', message: '' };
	function handleSubmit(e) {
		e.preventDefault();
		alert('Thank you for your message! We will get back to you soon.');
		formData = { name: '', email: '', phone: '', projectType: '', message: '' };
	}

	onMount(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY < window.innerHeight) {
				heroBgTransform = `translateY(${scrollY * 0.3}px)`;
			}
		};

		window.addEventListener('scroll', handleScroll);

		// Trigger image reveal after mount
		setTimeout(() => {
			imgRevealed = true;
		}, 500);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function scrollToSection(id) {
		const element = document.getElementById(id);
		if (element) {
			const headerHeight = 96;
			const targetPosition = element.offsetTop - headerHeight;
			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			});
		}
	}
</script>

<svelte:head>
	<title>Permits & More - San Diego's Premier Permit Processing Experts</title>
	<meta
		name="description"
		content="Permits & More - San Diego's premier permit processing experts. We navigate the complexity so you can build with confidence. Serving architects, developers, and contractors for 12+ years."
	/>
	<link rel="preload" href="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=80" as="image" fetchpriority="high" />
</svelte:head>

<Header isHeroPage={true} />

<!-- Hero Section -->
<section
	id="hero"
	class="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
>
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0">
		<img
			src="/san-diego-skyline.jpg"
			alt="City skyline at sunset"
			class="w-full h-full object-cover parallax-bg"
			style="transform: {heroBgTransform}"
			fetchpriority="high"
			loading="eager"
			decoding="async"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950/80"
		></div>
	</div>

	<!-- Hero Content -->
	<div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
		<div
			class="max-w-4xl mx-auto bg-neutral-950/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 lg:bg-transparent lg:backdrop-blur-none lg:p-0"
		>
			<!-- Eyebrow -->
			<p
				class="text-brand-400 text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6 animate-fade-in"
				style="animation-delay: 0.2s"
			>
				San Diego's Premier Permit Experts
			</p>

			<!-- Main Headline -->
			<h1 class="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8">
				<span
					class="font-semibold block animate-fade-up lg:whitespace-nowrap"
					style="animation-delay: 0.4s"
				>
					Navigate the Complexity.
				</span>
				<span class="font-serif italic block mt-2 animate-fade-up" style="animation-delay: 0.6s">
					Build with <span class="text-brand-400">Confidence.</span>
				</span>
			</h1>

			<!-- Subheadline -->
			<p
				class="text-lg md:text-xl text-white/90 font-normal leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up"
				style="animation-delay: 0.8s"
			>
				From initial concept to final approval, we transform the complex permitting process into a
				seamless experience.
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style="animation-delay: 1s">
				<a
					href="/contact"
					class="btn-primary text-white px-8 py-4 rounded-full text-base font-semibold inline-flex items-center justify-center gap-2 group"
				>
					Start Your Project
					<svg
						class="w-4 h-4 transition-transform group-hover:translate-x-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>
				<a
					href="/services"
					class="btn-secondary text-white px-8 py-4 rounded-full text-base font-semibold"
				>
					Explore Services
				</a>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
		<button
			on:click={() => scrollToSection('about')}
			class="scroll-indicator flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
			aria-label="Scroll to next section"
		>
			<span class="text-xs tracking-widest uppercase">Scroll</span>
			<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</button>
	</div>
</section>

<!-- About Section -->
<section id="about" class="py-24 lg:py-32 bg-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
			<!-- Left: Image -->
			<AnimateOnScroll>
				<div class="relative">
					<div class="img-reveal rounded-2xl overflow-hidden" class:revealed={imgRevealed}>
						<img
							src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2676&auto=format&fit=crop"
							alt="Construction site in San Diego with workers reviewing blueprints"
							class="w-full aspect-[4/5] object-cover"
						/>
					</div>
					<!-- Floating Stats Card -->
					<div class="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 lg:p-8 card-hover">
						<div class="text-4xl lg:text-5xl font-light text-brand-500">
							<StatCounter target={500} />
						</div>
						<div class="text-sm text-neutral-600 mt-1">Projects Completed</div>
					</div>
				</div>
			</AnimateOnScroll>

			<!-- Right: Content -->
			<div>
				<AnimateOnScroll>
					<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
						Who We Are
					</p>
				</AnimateOnScroll>
				<AnimateOnScroll delay={1}>
					<h2 class="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
						<span class="font-medium">Your Partner in</span>
						<span class="font-serif italic block">Permit Excellence</span>
					</h2>
				</AnimateOnScroll>
				<AnimateOnScroll delay={2}>
					<div class="space-y-4 text-neutral-700 leading-relaxed">
						<p>
							Permits & More provides exceptional engineering services designed to move your
							project seamlessly from concept through design to full permit approval. We've built
							our reputation on precision, reliability, and an unwavering commitment to meeting
							your timelines.
						</p>
						<p>
							For over 12 years, we've been the trusted partner for architects, developers, sign
							contractors, general contractors, and homeowners throughout Southern California. Our
							mission is simple: transform the often lengthy and tedious permitting process into a
							faster, easier, and stress-free experience.
						</p>
					</div>
				</AnimateOnScroll>

				<!-- Quick Stats -->
				<AnimateOnScroll delay={3}>
					<div class="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-neutral-100">
						<div>
							<div class="text-3xl font-light text-brand-500">
								<StatCounter target={12} suffix="+" />
							</div>
							<div class="text-sm text-neutral-500 mt-1">Years Experience</div>
						</div>
						<div>
							<div class="text-3xl font-light text-brand-500">
								<StatCounter target={98} suffix="%" />
							</div>
							<div class="text-sm text-neutral-500 mt-1">Approval Rate</div>
						</div>
						<div>
							<div class="text-3xl font-light text-brand-500">
								<StatCounter target={24} />
							</div>
							<div class="text-sm text-neutral-500 mt-1">Hour Response</div>
						</div>
					</div>
				</AnimateOnScroll>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section id="services" class="py-24 lg:py-32 bg-neutral-50">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<!-- Section Header -->
		<div class="max-w-3xl mb-16 lg:mb-20">
			<AnimateOnScroll>
				<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
					What We Do
				</p>
			</AnimateOnScroll>
			<AnimateOnScroll delay={1}>
				<h2 class="text-3xl md:text-4xl lg:text-5xl leading-tight">
					<span class="font-medium">Comprehensive</span>
					<span class="font-serif italic"> Permit Services</span>
				</h2>
			</AnimateOnScroll>
			<AnimateOnScroll delay={2}>
				<p class="text-neutral-600 mt-6 text-lg leading-relaxed">
					From residential renovations to major commercial developments, we provide end-to-end
					permit processing services tailored to your project's unique requirements.
				</p>
			</AnimateOnScroll>
		</div>

		<!-- Services Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each [
				{ icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'Permit Processing', desc: 'Complete end-to-end permit application management, from initial submission through final approval with the City of San Diego and surrounding jurisdictions.' },
				{ icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', title: 'Code Compliance', desc: 'Building code violation assistance to help you resolve issues quickly and maintain full compliance, protecting and optimizing your property\'s value.' },
				{ icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4', title: 'Plan Review', desc: 'Expert pre-submission plan review to identify and resolve potential issues before they become costly delays in the approval process.' },
				{ icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', title: 'Expedited Processing', desc: 'Fast-track permit services when time is critical. We leverage our relationships and expertise to accelerate your approval timeline.' },
				{ icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', title: 'Contractor Support', desc: 'Dedicated support for architects, developers, sign contractors, and general contractors with specialized permit requirements.' },
				{ icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', title: 'Residential Permits', desc: 'Homeowner-friendly permit services for renovations, additions, ADUs, and remodels throughout San Diego County.' }
			] as service, index}
				<AnimateOnScroll delay={index % 3}>
					<div class="bg-white rounded-2xl p-8 lg:p-10 card-hover h-full">
						<div class="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6">
							<svg class="w-7 h-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={service.icon} />
							</svg>
						</div>
						<h3 class="text-xl font-semibold mb-3">{service.title}</h3>
						<p class="text-neutral-600 leading-relaxed">{service.desc}</p>
					</div>
				</AnimateOnScroll>
			{/each}
		</div>

		<!-- CTA -->
		<AnimateOnScroll>
			<div class="text-center mt-16">
				<a
					href="/services"
					class="btn-primary text-white px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 group"
				>
					View All Services
					<svg
						class="w-4 h-4 transition-transform group-hover:translate-x-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
			</div>
		</AnimateOnScroll>
	</div>
</section>

<!-- Process Section -->
<section id="process" class="py-24 lg:py-32 bg-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
			<!-- Left: Content -->
			<div>
				<AnimateOnScroll>
					<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
						Our Process
					</p>
				</AnimateOnScroll>
				<AnimateOnScroll delay={1}>
					<h2 class="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
						<span class="font-medium">From Concept</span>
						<span class="font-serif italic block">to Approval</span>
					</h2>
				</AnimateOnScroll>
				<AnimateOnScroll delay={2}>
					<p class="text-neutral-600 text-lg leading-relaxed mb-10">
						We've refined our process over hundreds of projects to ensure precision, efficiency,
						and successful outcomes every time.
					</p>
				</AnimateOnScroll>

				<!-- Process Steps -->
				<div class="space-y-8">
					{#each [
						{ num: '01', title: 'Consultation & Assessment', desc: 'We review your project requirements and create a customized permit strategy aligned with your timeline and budget.' },
						{ num: '02', title: 'Document Preparation', desc: 'Our team prepares and organizes all required documentation, ensuring compliance with current building codes and regulations.' },
						{ num: '03', title: 'Submission & Tracking', desc: 'We submit your application and actively manage the review process, addressing any questions or requests from officials.' },
						{ num: '04', title: 'Approval & Handoff', desc: 'Once approved, we deliver your permits and provide guidance on next steps for your construction project.' }
					] as step, index}
						<AnimateOnScroll delay={index + 2}>
							<div class="flex gap-6">
								<div class="flex-shrink-0">
									<div class="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center font-semibold">
										{step.num}
									</div>
								</div>
								<div>
									<h3 class="text-lg font-semibold mb-2">{step.title}</h3>
									<p class="text-neutral-600">{step.desc}</p>
								</div>
							</div>
						</AnimateOnScroll>
					{/each}
				</div>
			</div>

			<!-- Right: Image -->
			<AnimateOnScroll>
				<div class="relative h-full min-h-[500px]">
					<img
						src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
						alt="Modern San Diego architecture"
						class="w-full h-full object-cover rounded-2xl"
					/>
					<!-- Accent decoration -->
					<div class="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-brand-200 rounded-2xl"></div>
				</div>
			</AnimateOnScroll>
		</div>
	</div>
</section>

<!-- Trust Section -->
<section id="trust" class="py-24 lg:py-32 bg-neutral-950 text-white relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-5">
		<div class="absolute top-0 left-0 w-96 h-96 bg-brand-500 rounded-full filter blur-3xl"></div>
		<div class="absolute bottom-0 right-0 w-96 h-96 bg-brand-500 rounded-full filter blur-3xl"></div>
	</div>

	<div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
		<div class="text-center max-w-3xl mx-auto mb-16">
			<AnimateOnScroll>
				<p class="text-brand-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
					Why Choose Us
				</p>
			</AnimateOnScroll>
			<AnimateOnScroll delay={1}>
				<h2 class="text-3xl md:text-4xl lg:text-5xl leading-tight">
					<span class="font-light">Trusted by San Diego's</span>
					<span class="font-serif italic block">Leading Builders</span>
				</h2>
			</AnimateOnScroll>
		</div>

		<!-- Trust Points -->
		<div class="grid md:grid-cols-3 gap-8 lg:gap-12">
			<AnimateOnScroll>
				<div class="text-center">
					<div class="text-5xl lg:text-6xl font-light text-brand-400 mb-4">
						<StatCounter target={500} suffix="+" />
					</div>
					<div class="text-lg font-medium mb-2">Projects Completed</div>
					<p class="text-white/60 text-sm">
						Across residential, commercial, and industrial sectors
					</p>
				</div>
			</AnimateOnScroll>
			<AnimateOnScroll delay={1}>
				<div class="text-center">
					<div class="text-5xl lg:text-6xl font-light text-brand-400 mb-4">
						<StatCounter target={98} suffix="%" />
					</div>
					<div class="text-lg font-medium mb-2">First-Time Approval</div>
					<p class="text-white/60 text-sm">
						Our expertise minimizes rejections and revisions
					</p>
				</div>
			</AnimateOnScroll>
			<AnimateOnScroll delay={2}>
				<div class="text-center">
					<div class="text-5xl lg:text-6xl font-light text-brand-400 mb-4">
						<StatCounter target={12} suffix="+" />
					</div>
					<div class="text-lg font-medium mb-2">Years of Excellence</div>
					<p class="text-white/60 text-sm">
						Deep relationships with city officials and inspectors
					</p>
				</div>
			</AnimateOnScroll>
		</div>

		<!-- Quote -->
		<AnimateOnScroll>
			<div class="mt-20 max-w-4xl mx-auto text-center">
				<svg class="w-12 h-12 text-brand-500/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
					<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
				</svg>
				<blockquote class="text-2xl md:text-3xl font-light leading-relaxed mb-8">
					"Our mission is to make the often long and tedious process of obtaining building permits
					<span class="text-brand-400 font-serif italic">faster, easier, and less stressful</span>
					on you, the client."
				</blockquote>
				<div class="text-white/60">— Permits & More Team</div>
			</div>
		</AnimateOnScroll>
	</div>
</section>

<!-- Social Proof / Reviews Section -->
<section id="reviews" class="py-24 lg:py-32 bg-neutral-50">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="text-center max-w-3xl mx-auto mb-16">
			<AnimateOnScroll>
				<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
					Client Testimonials
				</p>
			</AnimateOnScroll>
			<AnimateOnScroll delay={1}>
				<h2 class="text-3xl md:text-4xl lg:text-5xl leading-tight">
					<span class="font-medium">Don't Just Take</span>
					<span class="font-serif italic block">Our Word for It</span>
				</h2>
			</AnimateOnScroll>
			<AnimateOnScroll delay={2}>
				<p class="text-neutral-600 mt-6 text-lg leading-relaxed">
					Hear from the contractors, architects, and homeowners who trust Permits & More to deliver results.
				</p>
			</AnimateOnScroll>
		</div>

		<!-- Reviews Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each [
				{
					text: 'Exceptional service! Permits & More made the entire process seamless and stress-free. Highly professional team.',
					name: 'David F.',
					role: 'Property Developer',
					rating: 5
				},
				{
					text: 'Outstanding expertise in navigating complex permit requirements. Saved us significant time and money.',
					name: 'Kellin C.',
					role: 'General Contractor',
					rating: 5
				},
				{
					text: 'Permits & More exceeded expectations. Their knowledge of San Diego building codes is unmatched.',
					name: 'Jess B.',
					role: 'Architect',
					rating: 5
				},
				{
					text: 'I am grateful to Peter and his team for all their help. It is a pleasure to recommend Permits & More!',
					name: 'Christina R.',
					role: 'Business Owner',
					rating: 5
				},
				{
					text: 'Professional, responsive, and incredibly efficient. They handled everything from start to finish.',
					name: 'Daniel V.',
					role: 'Homeowner',
					rating: 5
				},
				{
					text: "Consistent and reliable. We've completed multiple projects with them and always impressed.",
					name: 'Mike L.',
					role: 'General Contractor',
					rating: 5
				}
			] as review, index}
				<AnimateOnScroll delay={index % 3}>
					<div class="bg-white rounded-2xl p-8 card-hover h-full flex flex-col border border-neutral-100">
						<!-- Stars -->
						<div class="flex gap-1 mb-5">
							{#each Array(5) as _, starIdx}
								<svg
									class="w-5 h-5 {starIdx < review.rating ? 'text-amber-400' : 'text-neutral-200'}"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							{/each}
						</div>

						<!-- Review Text -->
						<p class="text-neutral-700 leading-relaxed flex-1 mb-6">"{review.text}"</p>

						<!-- Reviewer -->
						<div class="flex items-center gap-4 pt-5 border-t border-neutral-200/80">
							<div class="w-11 h-11 bg-brand-{index % 2 === 0 ? '500' : '700'} rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
								{review.name.split(' ').map(n => n[0]).join('')}
							</div>
							<div>
								<div class="font-semibold text-neutral-800">{review.name}</div>
								<div class="text-neutral-500 text-sm">{review.role}</div>
							</div>
						</div>
					</div>
				</AnimateOnScroll>
			{/each}
		</div>

		<!-- See All Reviews CTA -->
		<AnimateOnScroll>
			<div class="text-center mt-14">
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

<!-- Location Section -->
<section id="location" class="py-24 lg:py-32 bg-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
			<!-- Left: Content -->
			<div>
				<AnimateOnScroll>
					<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
						Local Expertise
					</p>
				</AnimateOnScroll>
				<AnimateOnScroll delay={1}>
					<h2 class="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
						<span class="font-medium">Proudly Serving</span>
						<span class="font-serif italic block">Southern California</span>
					</h2>
				</AnimateOnScroll>
				<AnimateOnScroll delay={2}>
					<div class="space-y-4 text-neutral-600 leading-relaxed">
						<p>
							Based in San Diego, we've built deep relationships with Building Departments across
							Southern California. Our local expertise means we understand the nuances of each
							region's permitting landscape like no one else.
						</p>
						<p>
							Whether you're developing in San Diego's Gaslamp Quarter, renovating a home in Orange
							County, building commercial space in Riverside, or working on a project in parts of
							Los Angeles, our team has the experience and connections to navigate your permit
							through to approval.
						</p>
					</div>
				</AnimateOnScroll>

				<!-- Service Areas -->
				<AnimateOnScroll delay={3}>
					<div class="mt-8">
						<h4 class="font-medium mb-4">Areas We Serve:</h4>
						<div class="flex flex-wrap gap-2">
							{#each ['San Diego County', 'Orange County', 'Riverside County', 'Parts of Los Angeles', 'La Jolla', 'Chula Vista', 'Carlsbad', '+ More'] as area}
								<span class="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm">{area}</span>
							{/each}
						</div>
					</div>
				</AnimateOnScroll>
			</div>

			<!-- Right: Image Grid -->
			<AnimateOnScroll>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-4">
						<img
							src="https://www.travelblissnow.com/wp-content/uploads/2021/04/sunset-over-huntington-beach-pier-orange-county.jpg"
							alt="Sunset over Huntington Beach Pier in Orange County"
							class="w-full aspect-[3/4] object-cover rounded-2xl"
						/>
						<img
							src="https://ca-times.brightspotcdn.com/dims4/default/6446867/2147483647/strip/true/crop/5930x3113+0+420/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F78%2Ff7%2Fe44950b6400494c6971af631b8b0%2F1369677-wk-riverside-guide-3-gmf.jpg"
							alt="Riverside County scenic view"
							class="w-full aspect-square object-cover rounded-2xl"
						/>
					</div>
					<div class="space-y-4 pt-8">
						<img
							src="https://media.timeout.com/images/105100384/750/562/image.jpg"
							alt="Southern California cityscape"
							class="w-full aspect-square object-cover rounded-2xl"
						/>
						<img
							src="https://media.istockphoto.com/id/513816236/photo/san-diego-coronado-bay-bridge-from-above.jpg?s=612x612&w=0&k=20&c=B_qn7yse1UaCodHM696jg-KdBTpT0oN7xw_2h9bXonk="
							alt="San Diego Coronado Bay Bridge aerial view"
							class="w-full aspect-[3/4] object-cover rounded-2xl"
						/>
					</div>
				</div>
			</AnimateOnScroll>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section id="cta" class="relative py-24 lg:py-32 overflow-hidden">
	<!-- Background Image -->
	<div class="absolute inset-0">
		<img
			src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop"
			alt="Modern building exterior"
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-brand-600/95 to-brand-500/90"></div>
	</div>

	<div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center text-white">
			<AnimateOnScroll>
				<h2 class="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
					<span class="font-medium">Ready to Start</span>
					<span class="font-serif italic block">Your Project?</span>
				</h2>
			</AnimateOnScroll>
			<AnimateOnScroll delay={1}>
				<p class="text-xl text-white/80 mb-10">
					Let's discuss how we can help streamline your permit process and get your project moving
					forward.
				</p>
			</AnimateOnScroll>
			<AnimateOnScroll delay={2}>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="/contact"
						class="bg-white text-brand-600 hover:bg-neutral-100 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
					>
						Schedule a Consultation
						<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
					<a
						href="tel:6193234048"
						class="border-2 border-white text-white hover:bg-white hover:text-brand-600 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
					>
						(619) 323-4048
					</a>
				</div>
			</AnimateOnScroll>
		</div>
	</div>
</section>

<!-- Contact & Message Form Section -->
<section id="contact" class="py-24 lg:py-32 bg-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
			<!-- Left: Contact Details -->
			<div>
				<AnimateOnScroll>
					<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
						Get in Touch
					</p>
				</AnimateOnScroll>
				<AnimateOnScroll delay={1}>
					<h2 class="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
						<span class="font-medium">Let's Talk About</span>
						<span class="font-serif italic block">Your Project</span>
					</h2>
				</AnimateOnScroll>
				<AnimateOnScroll delay={2}>
					<p class="text-neutral-600 leading-relaxed mb-10">
						Have a question or ready to get started? Reach out to us directly or fill out the form
						and we'll get back to you within 24 hours.
					</p>
				</AnimateOnScroll>

				<div class="space-y-6">
					<AnimateOnScroll delay={2}>
						<div class="flex items-start gap-4">
							<div class="icon-gradient w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
								<svg class="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold mb-1">Phone</h3>
								<a href="tel:6193234048" class="text-brand-500 hover:text-brand-600 text-lg transition-colors">(619) 323-4048</a>
							</div>
						</div>
					</AnimateOnScroll>

					<AnimateOnScroll delay={3}>
						<div class="flex items-start gap-4">
							<div class="icon-gradient w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
								<svg class="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold mb-1">Email</h3>
								<a href="mailto:info@permitsandmore.com" class="text-brand-500 hover:text-brand-600 text-lg transition-colors">info@permitsandmore.com</a>
							</div>
						</div>
					</AnimateOnScroll>

					<AnimateOnScroll delay={3}>
						<div class="flex items-start gap-4">
							<div class="icon-gradient w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
								<svg class="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold mb-1">San Diego Office</h3>
								<p class="text-neutral-600">9921 Carmel Mtn Road<br />#327<br />San Diego, CA 92129</p>
							</div>
						</div>
					</AnimateOnScroll>

					<AnimateOnScroll delay={4}>
						<div class="flex items-start gap-4">
							<div class="icon-gradient w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
								<svg class="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold mb-1">Business Hours</h3>
								<p class="text-neutral-600">
									Monday – Friday: 8:00 AM – 6:00 PM<br />
									Saturday: 9:00 AM – 2:00 PM<br />
									Sunday: Closed
								</p>
							</div>
						</div>
					</AnimateOnScroll>
				</div>
			</div>

			<!-- Right: Message Form -->
			<AnimateOnScroll delay={1}>
				<div class="bg-neutral-50 rounded-2xl p-8 md:p-10 border border-neutral-100">
					<h3 class="text-2xl font-semibold mb-2">Send Us a Message</h3>
					<p class="text-neutral-500 mb-8 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
					<form on:submit={handleSubmit} class="space-y-5">
						<div>
							<label for="home-name" class="block text-neutral-700 font-medium mb-2 text-sm">Full Name *</label>
							<input
								id="home-name"
								type="text"
								placeholder="John Doe"
								required
								bind:value={formData.name}
								class="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
							/>
						</div>
						<div class="grid md:grid-cols-2 gap-5">
							<div>
								<label for="home-email" class="block text-neutral-700 font-medium mb-2 text-sm">Email *</label>
								<input
									id="home-email"
									type="email"
									placeholder="john@example.com"
									required
									bind:value={formData.email}
									class="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
								/>
							</div>
							<div>
								<label for="home-phone" class="block text-neutral-700 font-medium mb-2 text-sm">Phone *</label>
								<input
									id="home-phone"
									type="tel"
									placeholder="(619) 555-0123"
									required
									bind:value={formData.phone}
									class="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
								/>
							</div>
						</div>
						<div>
							<label for="home-project" class="block text-neutral-700 font-medium mb-2 text-sm">Project Type *</label>
							<select
								id="home-project"
								required
								bind:value={formData.projectType}
								class="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
							>
								<option value="">Select Project Type</option>
								<option>Residential New Construction</option>
								<option>Residential Remodel</option>
								<option>Commercial New Construction</option>
								<option>Commercial Tenant Improvement</option>
								<option>Industrial</option>
								<option>Other</option>
							</select>
						</div>
						<div>
							<label for="home-message" class="block text-neutral-700 font-medium mb-2 text-sm">Message *</label>
							<textarea
								id="home-message"
								rows="4"
								placeholder="Tell us about your project..."
								required
								bind:value={formData.message}
								class="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"
							></textarea>
						</div>
						<button
							type="submit"
							class="w-full btn-primary text-white py-4 rounded-xl font-semibold text-base inline-flex items-center justify-center gap-2"
						>
							Send Message
							<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</button>
					</form>
				</div>
			</AnimateOnScroll>
		</div>
	</div>
</section>
