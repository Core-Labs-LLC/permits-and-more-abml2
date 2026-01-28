<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let isHeroPage = false;

	let menuOpen = false;
	let scrolled = false;

	const navLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/work', label: 'Projects' },
		{ href: '/newsletter', label: 'Newsletter' },
		{ href: '/reviews', label: 'Reviews' },
		{ href: '/contact', label: 'Contact' }
	];

	const mobileNavLinks = [
		{ href: '/', label: 'Home' },
		...navLinks
	];

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 100;
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	$: headerClasses = scrolled || !isHeroPage || menuOpen
		? 'bg-white shadow-lg shadow-neutral-100/50'
		: '';

	$: navLinkClasses = scrolled || !isHeroPage || menuOpen
		? 'text-neutral-700 hover:text-brand-500'
		: 'text-white';

	$: hamburgerClasses = scrolled || !isHeroPage || menuOpen
		? 'bg-neutral-700'
		: 'bg-white';
</script>

<header
	id="header"
	class="fixed top-0 left-0 right-0 z-[110] transition-all duration-500 {headerClasses}"
>
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="flex items-center justify-between h-16 lg:h-24">
			<!-- Logo -->
			<a href="/" class="relative z-10 flex-shrink-0">
				<img
					src="https://i0.wp.com/permitsandmore.com/wp-content/uploads/2016/06/cropped-logo-1.png?fit=263%2C60&ssl=1"
					alt="Permits & More"
					class="h-10 lg:h-14 w-auto transition-all duration-300"
				/>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center gap-6 lg:gap-8">
				{#each navLinks as link}
					<a
						href={link.href}
						class="nav-link link-underline text-sm font-medium tracking-wide uppercase transition-colors duration-300 {$page.url.pathname === link.href ? 'text-brand-500' : navLinkClasses}"
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<!-- Mobile Menu Button -->
			<button
				on:click={toggleMenu}
				class="md:hidden relative z-10 w-12 h-12 flex items-center justify-center overflow-visible"
				aria-label="Toggle menu"
			>
				<div class="relative w-6 h-5 flex flex-col justify-between">
					<span
						class="block w-6 h-0.5 transition-all duration-300 origin-center absolute left-0 {hamburgerClasses}"
						style="top: {menuOpen ? '50%' : '0'}; transform: {menuOpen ? 'translateY(-50%) rotate(45deg)' : 'none'}"
					></span>
					<span
						class="block w-6 h-0.5 transition-all duration-300 absolute top-1/2 left-0 -translate-y-1/2 {hamburgerClasses}"
						style="opacity: {menuOpen ? '0' : '1'}"
					></span>
					<span
						class="block h-0.5 transition-all duration-300 origin-center absolute left-0 {hamburgerClasses}"
						style="width: {menuOpen ? '1.5rem' : '1rem'}; bottom: {menuOpen ? 'auto' : '0'}; top: {menuOpen ? '50%' : 'auto'}; transform: {menuOpen ? 'translateY(-50%) rotate(-45deg)' : 'none'}"
					></span>
				</div>
			</button>
		</div>
	</div>

	<!-- Mobile Menu Overlay -->
	<div
		class="fixed top-16 left-0 right-0 bottom-0 bg-white mobile-menu-overlay transition-opacity duration-300 ease-out md:hidden"
		style="z-index: 100; opacity: {menuOpen ? '1' : '0'}; pointer-events: {menuOpen ? 'auto' : 'none'}"
	>
		<div class="flex flex-col items-center justify-start h-full gap-5 pt-12">
			{#each mobileNavLinks as link, index}
				<a
					href={link.href}
					on:click={closeMenu}
					class="mobile-nav-link text-2xl font-light tracking-wide transition-all duration-300 text-center {$page.url.pathname === link.href ? 'text-brand-500' : 'text-neutral-800 hover:text-brand-500'}"
					style="transform: translateY({menuOpen ? '0' : '1rem'}); opacity: {menuOpen ? '1' : '0'}; transition-delay: {menuOpen ? (100 + index * 80) + 'ms' : '0ms'}"
				>
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</header>
