<script lang="ts">
import { Flex } from '$lib/components';
import { cross } from '$lib/img';
import type { Snippet } from 'svelte';

let {
    show = $bindable(),
    lineColor = 'border-yellow-400',
    children,
    header,
    ...rest
} : {
    show: boolean;
    lineColor?: string;
    children: Snippet;
    header?: Snippet;
} = $props();

$effect(() => {
    if (show) {
        console.log(document.body.style.overflow)
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = '';
    }
});

const close = () => show = false;

</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button onclick={() => close()} class="bg-[#000000ba] fixed top-0 left-0 size-full z-2 cursor-pointer"></button>

<Flex col className="fixed top-0 left-0 md:top-1/2 md:left-1/2 max-md:w-screnn md:w-160 max-md:h-full md:h-160 max-md:min-h-screen md:-translate-y-1/2 md:-translate-x-1/2 z-3 text-justify gap-0!">
    <Flex className="relative p-2 w-full justify-between! bg-white {lineColor} border-b-16">
        {@render header?.()}
        <button onclick={() => show = false} class="click bg-white absolute right-2">
            <img src={cross} alt="">
        </button>
    </Flex>
    <Flex col className="h-full overflow-y-scroll p-4 bg-white">
        {@render children()}
    </Flex>
</Flex>

