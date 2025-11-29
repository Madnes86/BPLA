<script lang="ts">
import { Flex, Wrapper } from '$lib/components';
import { artem, denis, pasha, vadim } from '$lib/img';
    import { fade } from 'svelte/transition';

let selected: number = $state(0);
const TEAM: { src: string, name: string, desc: string }[] = [
    {src: artem, name: 'Лисимов Артем', desc: 'Руководитель - организация мероприятий и управление лабораторией'},
    {src: denis, name: 'Денис Александрович', desc: 'Специались по связям и пилот, взаимодействует с людьми и инструктирутет полеты'},
    {src: pasha, name: 'Павел Александрович', desc: 'Инженер-конструктор - разработка дронов и микроэлектроники'},
    {src: vadim, name: 'Вадим Александрович', desc: 'Програмный инженер, разрабатывает сайты'},
];

const setSelected = (i: number) => selected = i;

</script>

<Wrapper className="text-gray-300">
    <h3>Наша команда</h3>
</Wrapper>
<div class="p-4 bg-gray-300">
    <Wrapper className="gap-4">
        {#each TEAM as {src, name, desc}, i}
            <Flex>
                <img onmouseenter={() => setSelected(i)} {src} alt="" class="min-w-24 size-24 rounded-full">
                {#if selected == i}
                    <div in:fade={{ duration: 500}} class="flex flex-col w-60 text-white">
                        <h4 class="text-md">{name}</h4>
                        <p class="text-sm">{desc}</p>
                    </div>
                {/if}
            </Flex>
        {/each}
    </Wrapper>
</div>