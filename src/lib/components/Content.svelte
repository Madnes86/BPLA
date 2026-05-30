<script lang="ts">
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

let {
    md,
    className = ''
}: {
    md: string;
    className?: string;
} = $props();

let html = $derived(DOMPurify.sanitize(marked.parse(md ?? '', { async: false })));
</script>

<section class="prose max-w-none {className}">
    {@html html}
</section>
