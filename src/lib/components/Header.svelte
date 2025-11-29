<script lang="ts">
import { Flex, Spacer, Wrapper, Link } from '$lib/components';
import { logo } from '$lib/img';
import { NAVS } from '$lib/data/Header';

</script>

<Wrapper className="p-2">
    <a href="/" class="click">
        <img src="{logo}" alt="" class="w-14">
    </a>
    <Spacer />
    {#each NAVS as {name, href, icon: Icon}}
        <Link {href} className="whitespace-nowrap shrink-0">
            <Icon />
            <span>{name}</span>
        </Link>
        <!-- <Flex className="click shrink-0">
        </Flex> -->
    {/each}
</Wrapper>