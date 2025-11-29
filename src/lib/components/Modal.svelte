<script lang="ts">
import { Flex, Spacer } from '$lib/components';
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
const close = () => show = false;

</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button onclick={() => close()} class="bg-[#000000ba] fixed top-0 left-0 size-full z-2 cursor-pointer"></button>

<Flex col className="fixed top-1/2 left-1/2 max-md:w-size-[50vw] max-size-[50vw] -translate-y-1/2 -translate-x-1/2 z-3 text-justify gap-0!">
    <Flex className="p-2 w-full justify-between! bg-white {lineColor} border-b-16">
        {@render header?.()}
        <button onclick={() => show = false} class="click">
            <img src={cross} alt="">
        </button>
    </Flex>
    <Flex col className="max-md:max-h-2/3 max-h-100 p-4 bg-white">
        {@render children()}
    </Flex>
</Flex>