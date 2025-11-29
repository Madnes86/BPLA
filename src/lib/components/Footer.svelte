<script lang="ts">
import { Flex, Wrapper, Link } from '$lib/components';
import { NAVS } from '$lib/data/Header';
import { ugrasu, quantorium } from '$lib/icons';

const PARTNERS: {icon: any, href: string}[] = [
    { icon: ugrasu, href: '#' },
    { icon: quantorium, href: '#' }
];
</script>

<div class="bg-gray-300 text-white">
    <Wrapper col className="justify-between">
        <Flex className="w-full justify-between">
            <Flex col className="items-start">
                {#each NAVS as {name, href, icon: Icon}}
                    <Link {href}>
                        <Icon fill="white"/>
                        <p>{name}</p>
                    </Link>
                {/each}
                <Link href="#">Вступить в клуб</Link>
            </Flex>
            <Flex>
                {#each PARTNERS as {icon: Icon, href}}
                    <Link {href} className="w-20">
                        <Icon />
                    </Link>
                {/each}
            </Flex>
        </Flex>
        <Flex>© БПЛА КЛУБ 2025–2026 <Link href="https://t.me/vadim8686">Разработка сайтов: @vadim8686</Link></Flex>
    </Wrapper>
</div>