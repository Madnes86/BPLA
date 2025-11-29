<script lang="ts">
import type { Snippet } from "svelte";

let {
    children,
    // onclick,
    className,
    ...rest
} : {
    children: Snippet;
    // onclick?: () => void;
    className?: string;
} = $props();
</script>

<button class="flex gap-2 border-sm p-2 click justify-center {className}" {...rest}>
    {@render children()}
</button>