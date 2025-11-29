<script lang="ts">
import { Flex, Slide1 } from '$lib/components';
    import { onMount } from 'svelte';

const SLIDES = [
    {
        src: 'https://img.freepik.com/premium-vector/drones-delivering-parcels-illustration_1178600-18646.jpg?ga=GA1.1.1881532403.1759726065&semt=ais_hybrid&w=740&q=80',
        title: 'Доставка грузов в условиях крайнего севера',
        profit: [
            'Доставка в труднодоступные районы без дорог',
            'Круглогодичная доступность удаленных поселений',
            'Скорость доставки в 3 раза выше традиционных методов'
        ],
        button: 'Подробнее'
    },
    {
        src: 'https://img.freepik.com/premium-vector/drones-delivering-parcels-illustration_1178600-18646.jpg?ga=GA1.1.1881532403.1759726065&semt=ais_hybrid&w=740&q=80',
        title: 'Доставка грузов в условиях крайнего севера',
        profit: [
            'Доставка в труднодоступные районы без дорог',
            'Круглогодичная доступность удаленных поселений',
            'Скорость доставки в 3 раза выше традиционных методов'
        ],
        button: 'Узнать подробнее'
    }
];
let slide: number = $state(0);

onMount(() => {
    setInterval(() => {
        if (SLIDES.length -1 == slide) {
            slide = 0;
        } else {
            slide++
        }
    }, 3_000);
})

</script>

<Flex className="w-screen">
    {#each SLIDES as {src, title, profit, button}, i}
        {#if i == slide}
            <Slide1 {src} {title} {profit} {button} />
        {/if}
    {/each}
</Flex>