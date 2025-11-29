<script lang="ts">
import type { Snippet } from 'svelte';

let {
    children,
    href,
    className,
    ...rest
} : {
    children: Snippet;
    href: string;
    className?: string;
} = $props();
</script>

<a {href} class="flex gap-2 {className} click" {...rest}>
    {@render children()}
</a>