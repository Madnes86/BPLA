<script lang="ts">
import { marked } from 'marked';

let {
    md,
    className = ''
}: {
    md: string;
    className?: string;
} = $props();

// Sanitize on the client only — $effect does not run during SSR, and dompurify
// (browser-only) is loaded lazily so the server bundle never pulls jsdom.
let html = $state('');

$effect(() => {
    let cancelled = false;
    (async () => {
        const DOMPurify = ((await import('dompurify')) as any).default;
        const raw = marked.parse(md ?? '', { async: false }) as string;
        const safe = DOMPurify.sanitize(raw);
        if (!cancelled) html = safe;
    })();
    return () => { cancelled = true; };
});
</script>

<section class="prose max-w-none {className}">
    {@html html}
</section>
