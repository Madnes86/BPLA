<script lang="ts">
import { Flex } from '$lib/components';
import type { Snippet } from 'svelte';

let {
    children,
    col,
    className,
    ...rest
} : {
    children: Snippet;
    col?: boolean;
    className?: string;
} = $props();

</script>

<Flex {col} className="{className} max-w-300 m-auto p-4" {...rest}>
    {@render children()}
</Flex>