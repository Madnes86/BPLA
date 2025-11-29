<script lang="ts">
import { Flex, Slide1 } from '$lib/components';

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
    }
]
</script>

<Flex className="w-screen">
    {#each SLIDES as {src, title, profit, button}, i}
        <Slide1 {src} {title} {profit} {button} />
    {/each}
</Flex>