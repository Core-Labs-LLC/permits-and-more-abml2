<script>
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Projects" },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];
</script>

<footer class="bg-neutral-950 text-white pt-20 pb-8">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
      <!-- Column 1: Brand -->
      <div class="lg:col-span-2">
        <img
          src="https://i0.wp.com/permitsandmore.com/wp-content/uploads/2016/06/cropped-logo-1.png?fit=263%2C60&ssl=1"
          alt="Permits & More"
          class="h-12 w-auto mb-6"
        />
        <p class="text-white/60 leading-relaxed max-w-md mb-6">
          San Diego's trusted partner for building permit processing. We
          transform the complex into the achievable, helping you build with
          confidence.
        </p>
        <div class="flex gap-4">
          <a
            href="https://www.instagram.com/permits_and_more/#"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-500 flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Column 2: Quick Links -->
      <div>
        <h4 class="font-semibold mb-6">Quick Links</h4>
        <ul class="space-y-3">
          {#each quickLinks as link}
            <li>
              <a
                href={link.href}
                class="text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Column 3: Contact -->
      <div>
        <h4 class="font-semibold mb-6">Contact</h4>
        <ul class="space-y-3 text-white/60">
          <li>
            <a href="tel:6193234048" class="hover:text-white transition-colors"
              >(619) 323-4048</a
            >
          </li>
          <li>
            <a
              href="mailto:info@permitsandmore.com"
              class="hover:text-white transition-colors"
            >
              info@permitsandmore.com
            </a>
          </li>
          <li class="pt-2">
            9921 Carmel Mtn Road<br />
            #327<br />
            San Diego, CA 92129
          </li>
        </ul>
      </div>
    </div>

    <!-- Divider -->
    <div class="divider-gradient mb-8"></div>

    <!-- Bottom Row -->
    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-white/40 text-sm">
        &copy; 2026 Permits & More. All rights reserved.
      </p>
      <p class="text-white/40 text-sm">
        Proudly made by <a href="https://www.corelabs.digital/" target="_blank" class="text-white/60 hover:text-white transition-colors">Core Labs</a>
      </p>
    </div>
  </div>
</footer>
