<script>
	import Header from '$lib/components/Header.svelte';
	import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';

	let formData = {
		name: '',
		email: '',
		phone: '',
		projectType: '',
		message: ''
	};

	function handleSubmit(e) {
		e.preventDefault();
		alert('Thank you for your message! We will get back to you soon.');
		formData = { name: '', email: '', phone: '', projectType: '', message: '' };
	}
</script>

<svelte:head>
	<title>Contact Us - Permits & More</title>
	<meta
		name="description"
		content="Contact Permits & More - Get in touch with our expert permit processing team in San Diego."
	/>
</svelte:head>

<Header />

<!-- Page Hero -->
<section class="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-neutral-50">
	<div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
		<p class="text-brand-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Get in Touch</p>
		<h1 class="text-4xl md:text-5xl lg:text-6xl leading-tight">
			<span class="font-medium">Contact</span>
			<span class="font-serif italic text-brand-500"> Us</span>
		</h1>
		<p class="text-lg text-neutral-600 max-w-2xl mx-auto mt-6">
			Ready to start your project? Contact us today for a free consultation. We're here to help
			with all your permit processing needs.
		</p>
	</div>
</section>

<!-- Contact Section -->
<section class="py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
			<!-- Contact Info -->
			<AnimateOnScroll>
				<div>
					<h2 class="text-3xl md:text-4xl leading-tight mb-8">
						<span class="font-medium">Contact</span>
						<span class="font-serif italic"> Information</span>
					</h2>
					<p class="text-neutral-600 mb-10">
						Ready to start your project? Contact us today for a free consultation.
					</p>

					<div class="space-y-8">
						<div class="flex items-start gap-4">
							<div
								class="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
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
										stroke-width="1.5"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
							</div>
							<div>
								<h3 class="font-semibold mb-1">Phone</h3>
								<a
									href="tel:6193234048"
									class="text-brand-500 hover:text-brand-600 text-lg transition-colors"
								>
									(619) 323-4048
								</a>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div
								class="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
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
										stroke-width="1.5"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<div>
								<h3 class="font-semibold mb-1">Email</h3>
								<a
									href="mailto:info@permitsandmore.com"
									class="text-brand-500 hover:text-brand-600 text-lg transition-colors"
								>
									info@permitsandmore.com
								</a>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div
								class="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
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
										stroke-width="1.5"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<div>
								<h3 class="font-semibold mb-1">Address</h3>
								<p class="text-neutral-600">
									9921 Carmel Mtn Road<br />#327<br />San Diego, CA 92129
								</p>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div
								class="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
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
										stroke-width="1.5"
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<div>
								<h3 class="font-semibold mb-1">Business Hours</h3>
								<p class="text-neutral-600">
									Monday - Friday: 8:00 AM - 6:00 PM<br />
									Saturday: 9:00 AM - 2:00 PM<br />
									Sunday: Closed
								</p>
							</div>
						</div>
					</div>
				</div>
			</AnimateOnScroll>

			<!-- Contact Form -->
			<AnimateOnScroll delay={1}>
				<div class="bg-neutral-50 rounded-2xl p-8 md:p-12">
					<h3 class="text-2xl font-semibold mb-6">Send Us a Message</h3>
					<form on:submit={handleSubmit} class="space-y-6">
						<div>
							<label class="block text-neutral-700 font-medium mb-2">Full Name *</label>
							<input
								type="text"
								placeholder="John Doe"
								required
								bind:value={formData.name}
								class="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
							/>
						</div>
						<div class="grid md:grid-cols-2 gap-6">
							<div>
								<label class="block text-neutral-700 font-medium mb-2">Email *</label>
								<input
									type="email"
									placeholder="john@example.com"
									required
									bind:value={formData.email}
									class="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
								/>
							</div>
							<div>
								<label class="block text-neutral-700 font-medium mb-2">Phone *</label>
								<input
									type="tel"
									placeholder="(619) 555-0123"
									required
									bind:value={formData.phone}
									class="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
								/>
							</div>
						</div>
						<div>
							<label class="block text-neutral-700 font-medium mb-2">Project Type *</label>
							<select
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
							<label class="block text-neutral-700 font-medium mb-2">Message *</label>
							<textarea
								rows="5"
								placeholder="Tell us about your project..."
								required
								bind:value={formData.message}
								class="w-full px-4 py-3 bg-white rounded-xl border border-neutral-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"
							></textarea>
						</div>
						<button type="submit" class="w-full btn-primary text-white py-4 rounded-xl font-semibold text-lg">
							Send Message
						</button>
					</form>
				</div>
			</AnimateOnScroll>
		</div>
	</div>
</section>
