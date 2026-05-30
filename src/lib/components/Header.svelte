<script lang="ts">
import { Spacer, Wrapper, Link } from '$lib/components';
import { NAVS } from '$lib/data/Header';

</script>

<Wrapper className="p-2">
    <a href="/" class="click">
        <img src="src/lib/img/logo.png" alt="" class="w-14">
    </a>
    <Spacer />
    {#each NAVS as {name, href, icon: Icon}}
        <Link {href} className="whitespace-nowrap shrink-0">
            <Icon />
            <span>{name}</span>
        </Link> 
    {/each}
</Wrapper>