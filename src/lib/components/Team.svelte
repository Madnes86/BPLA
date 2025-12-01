<script lang="ts">
import { Flex, Wrapper, Ping } from '$lib/components';
import { artem, denis, pasha, vadim, vlad } from '$lib/img';
import { fade } from 'svelte/transition';

const TEAM: { src: string, name: string, desc: string }[] = [
    {src: artem, name: 'Лисимов Артем', desc: 'Руководитель - организация мероприятий и управление лабораторией'},
    {src: denis, name: 'Денис Александрович', desc: 'Специались по связям и пилот, взаимодействует с людьми и инструктирутет полеты'},
    {src: pasha, name: 'Павел Александрович', desc: 'Инженер-конструктор - разработка дронов и микроэлектроники'},
    {src: vadim, name: 'Вадим Александрович', desc: 'Програмный инженер, веб разработка'},
    {src: vlad, name: 'Влад Андреивич', desc: 'Документовед'}
];
let selected: number = $state(0);
let width: number = $state(0);
let hovers: number[] = $state([0]);

function setSelected(i: number) {
    selected = i;
    if (hovers.includes(i)) return
    hovers.push(i);
}
// const setSelected = (i: number) => selected = i

</script>

<svelte:window bind:innerWidth={width} />

<Wrapper className="text-gray-300">
    <h3>Наша команда</h3>
</Wrapper>
<div class="p-4 bg-gray-300">
    <Wrapper className="gap-4 overflow-auto">
        {#each TEAM as {src, name, desc}, i}
            <Flex className="relative">
                <img onmouseenter={() => setSelected(i)} {src} alt="" class="min-w-24 size-24 rounded-full">
                {#if !hovers.includes(i) && width > 768}
                    <Ping className="absolute! top-0 left-0" />
                {/if}
                {#if selected == i && width > 768}
                    <div in:fade={{ duration: 500}} class="flex flex-col w-60 h-24 text-white">
                        <h4 class="text-md">{name}</h4>
                        <p class="text-sm">{desc}</p>
                    </div>
                {/if}
            </Flex>
        {/each}
    </Wrapper>
</div>