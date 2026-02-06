<script>
	import { onMount } from 'svelte';

	let isOpen = false;
	let showGreeting = false;
	let formData = {
		name: '',
		email: '',
		message: ''
	};

	function toggleChat() {
		isOpen = !isOpen;
		if (isOpen) {
			showGreeting = false;
		}
	}

	function closeChat() {
		isOpen = false;
	}

	function handleSubmit(e) {
		e.preventDefault();
		// Server logic will be added later
		console.log('Form submitted:', formData);
	}

	onMount(() => {
		// Show greeting bubble after 2 seconds
		const timer = setTimeout(() => {
			if (!isOpen) {
				showGreeting = true;
			}
		}, 2000);

		return () => clearTimeout(timer);
	});
</script>

<div class="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
	<!-- Chat Panel -->
	{#if isOpen}
		<div
			class="bg-white rounded-2xl shadow-2xl w-[340px] sm:w-[380px] overflow-hidden transform transition-all duration-300 ease-out"
			style="animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
		>
			<!-- Header -->
			<div class="bg-brand-500 px-5 py-4 flex items-center justify-between">
				<div class="flex items-center gap-3">
					<div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
						</svg>
					</div>
					<div>
						<h3 class="text-white font-semibold text-sm">Permits & More</h3>
						<p class="text-white/80 text-xs">We typically reply within an hour</p>
					</div>
				</div>
				<button
					on:click={closeChat}
					class="text-white/80 hover:text-white transition-colors p-1"
					aria-label="Close chat"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- Form -->
			<form on:submit={handleSubmit} class="p-5 space-y-4">
				<p class="text-neutral-600 text-sm">
					Have a question about permits? Send us a message and we'll get back to you shortly.
				</p>

				<div>
					<label for="chat-name" class="block text-sm font-medium text-neutral-700 mb-1">Name</label>
					<input
						id="chat-name"
						type="text"
						bind:value={formData.name}
						placeholder="Your name"
						class="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
						required
					/>
				</div>

				<div>
					<label for="chat-email" class="block text-sm font-medium text-neutral-700 mb-1">Email</label>
					<input
						id="chat-email"
						type="email"
						bind:value={formData.email}
						placeholder="your@email.com"
						class="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
						required
					/>
				</div>

				<div>
					<label for="chat-message" class="block text-sm font-medium text-neutral-700 mb-1">Message</label>
					<textarea
						id="chat-message"
						bind:value={formData.message}
						placeholder="How can we help you?"
						rows="3"
						class="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none"
						required
					></textarea>
				</div>

				<button
					type="submit"
					class="btn-primary w-full py-3 px-6 rounded-lg text-white font-medium text-sm"
				>
					Send Message
				</button>
			</form>
		</div>
	{/if}

	<!-- Greeting Bubble -->
	{#if showGreeting && !isOpen}
		<div
			class="bg-white rounded-2xl rounded-br-sm shadow-lg px-4 py-3 max-w-[220px] transform transition-all duration-300"
			style="animation: fadeSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
		>
			<button
				on:click={() => showGreeting = false}
				class="absolute -top-2 -right-2 w-6 h-6 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center text-neutral-500 transition-colors"
				aria-label="Dismiss greeting"
			>
				<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
			<p class="text-neutral-700 text-sm">
				👋 Hi there! Need help with permits? We're here for you.
			</p>
		</div>
	{/if}

	<!-- Avatar Button -->
	<button
		on:click={toggleChat}
		class="w-14 h-14 rounded-full bg-brand-500 hover:bg-brand-600 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group"
		aria-label={isOpen ? 'Close chat' : 'Open chat'}
	>
		{#if isOpen}
			<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		{:else}
			<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
			</svg>
		{/if}
	</button>
</div>

<style>
	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(20px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes fadeSlideIn {
		from {
			opacity: 0;
			transform: translateX(10px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
