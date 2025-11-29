<script lang="ts">
import { Flex, Ping, Button } from '$lib/components'

let {
    src,
    title,
    profit,
    button,
    ...rest
} : {
    src: string;
    title?: string;
    profit?: string[];
    button?: string;
} = $props();

</script>

<Flex class="w-full relative">
    <!-- <img src="https://img.freepik.com/premium-vector/realistic-isometric-illustration-landing-drone-modern-isometric-vector-illustration_88188-1158.jpg" alt=""> -->
    <img {src} alt="" class="w-full">
    <Flex col className="absolute p-4 w-full max-w-90 top-1/2 -translate-y-1/2 left-3/4 -translate-x-1/2 bg-[#ffffff51] backdrop-blur-xs gap-4">
        <h4>{title}</h4>
        {#each profit as e}
            <Flex>
                <Ping color='bg-black' />
                <p>{e}</p>
            </Flex>
        {/each}
        <Button className="animate-bounce bg-black text-white">{button}</Button>
    </Flex>
</Flex>