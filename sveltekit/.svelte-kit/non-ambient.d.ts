
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/approach" | "/contact" | "/newsletter" | "/reviews" | "/services" | "/work";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/approach": Record<string, never>;
			"/contact": Record<string, never>;
			"/newsletter": Record<string, never>;
			"/reviews": Record<string, never>;
			"/services": Record<string, never>;
			"/work": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/approach" | "/approach/" | "/contact" | "/contact/" | "/newsletter" | "/newsletter/" | "/reviews" | "/reviews/" | "/services" | "/services/" | "/work" | "/work/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.gitkeep" | string & {};
	}
}