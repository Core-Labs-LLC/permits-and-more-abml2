<script>
	import Header from '$lib/components/Header.svelte';
	import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';

	const services = [
		{
			icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
			title: 'Permit Processing',
			desc: 'Complete end-to-end permit application management, from initial submission through final approval with the City of San Diego and surrounding jurisdictions.'
		},
		{
			icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
			title: 'Code Compliance',
			desc: "Building code violation assistance to help you resolve issues quickly and maintain full compliance, protecting and optimizing your property's value."
		},
		{
			icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
			title: 'Plan Review',
			desc: 'Expert pre-submission plan review to identify and resolve potential issues before they become costly delays in the approval process.'
		},
		{
			icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
			title: 'Expedited Processing',
			desc: 'Fast-track permit services when time is critical. We leverage our relationships and expertise to accelerate your approval timeline.'
		},
		{
			icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
			title: 'Contractor Support',
			desc: 'Dedicated support for architects, developers, sign contractors, and general contractors with specialized permit requirements.'
		},
		{
			icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
			title: 'Residential Permits',
			desc: 'Homeowner-friendly permit services for renovations, additions, ADUs, and remodels throughout San Diego County.'
		}
	];

	const processSteps = [
		{ num: '01', title: 'Consultation', desc: 'We review your project and create a customized permit strategy.' },
		{ num: '02', title: 'Preparation', desc: 'Our team prepares all required documentation ensuring compliance.' },
		{ num: '03', title: 'Submission', desc: 'We submit and actively manage the review process.' },
		{ num: '04', title: 'Approval', desc: 'We deliver your permits and guide you on next steps.' }
	];
</script>

<svelte:head>
	<title>Services - Permits & More</title>
	<meta
		name="description"
		content="Services - Permits & More offers expert permit processing, inspection coordination, compliance support, and code review services in San Diego."
	/>
</svelte:head>

<Header />

<!-- Page Hero -->
<section class="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-neutral-50">
	<div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
		<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">What We Do</p>
		<h1 class="text-4xl md:text-5xl lg:text-6xl leading-tight">
			<span class="font-medium">Our</span>
			<span class="font-serif italic text-brand-500"> Services</span>
		</h1>
		<p class="text-lg text-neutral-600 max-w-2xl mx-auto mt-6">
			Solving problems before they happen. We combine expertise, process innovation and technology
			into services that proactively identify and address challenges.
		</p>
	</div>
</section>

<!-- Services Grid -->
<section class="py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as service, index}
				<AnimateOnScroll delay={index % 3}>
					<div class="bg-neutral-50 rounded-2xl p-8 lg:p-10 card-hover h-full">
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
									d={service.icon}
								/>
							</svg>
						</div>
						<h3 class="text-xl font-semibold mb-3">{service.title}</h3>
						<p class="text-neutral-600 leading-relaxed">{service.desc}</p>
					</div>
				</AnimateOnScroll>
			{/each}
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="py-20 lg:py-28 bg-neutral-50">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="text-center mb-16">
			<AnimateOnScroll>
				<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
					Our Process
				</p>
			</AnimateOnScroll>
			<AnimateOnScroll delay={1}>
				<h2 class="text-3xl md:text-4xl leading-tight">
					<span class="font-medium">From Concept</span>
					<span class="font-serif italic"> to Approval</span>
				</h2>
			</AnimateOnScroll>
		</div>

		<div class="grid md:grid-cols-4 gap-8">
			{#each processSteps as step, index}
				<AnimateOnScroll delay={index}>
					<div class="text-center">
						<div
							class="w-16 h-16 rounded-full bg-brand-500 text-white flex items-center justify-center font-semibold text-xl mx-auto mb-4"
						>
							{step.num}
						</div>
						<h3 class="text-lg font-semibold mb-2">{step.title}</h3>
						<p class="text-neutral-600 text-sm">{step.desc}</p>
					</div>
				</AnimateOnScroll>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 lg:py-28 bg-brand-500">
	<div class="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
		<h2 class="text-3xl md:text-4xl leading-tight mb-6">
			<span class="font-medium">Ready to Get</span>
			<span class="font-serif italic block">Started?</span>
		</h2>
		<p class="text-xl text-white/80 mb-10">
			Let's discuss how we can help streamline your permit process.
		</p>
		<a
			href="/contact"
			class="bg-white text-brand-600 hover:bg-neutral-100 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2"
		>
			Get a Free Quote
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
