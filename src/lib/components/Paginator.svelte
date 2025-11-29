<script lang="ts">
import { Flex, Spacer, Button } from '$lib/components';

let {
    currentPage = $bindable(),
    pages
} : {
    currentPage: number;
    pages: number;
} = $props();

</script>


<Flex className="border-2 border-black p-1 gap-1!">
    {#each {length: pages} as _, i}
        <Button onclick={() => currentPage = i} className="{currentPage == i && 'bg-black text-white'} py-1">{i+1}</Button>
    {/each}
</Flex>
