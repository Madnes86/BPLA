<script lang="ts">
import type { Snippet } from "svelte";

let {
    children,
    col,
    className,
    ...rest
} : {
    children: Snippet;
    col?: boolean;
    className?: string;
} & Record<string, any> = $props();
</script>

<div class="{col && 'flex-col'} flex gap-2 items-center {className}" {...rest}>
    {@render children()}
</div>


