<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import ChatWidget from '$lib/components/ChatWidget.svelte';
</script>

<slot />
<Footer />
<ChatWidget />
