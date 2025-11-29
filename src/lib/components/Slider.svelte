<script lang="ts">
import { Flex, Slide1, Button } from '$lib/components';
import Arrow from '$lib/icons/arrow.svelte';
import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

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
        src: 'https://img.freepik.com/premium-vector/realistic-isometric-illustration-landing-drone-modern-isometric-vector-illustration_88188-1158.jpg',
        title: 'Кастомизация дронов под ваши нужды',
        profit: [
            'Подбор компонентов под конкретные задачи',
            'Установка специализированных камер и сенсоров',
            'Полностью персонализированные решения'
        ],
        button: 'Обсудить проект'
    }
];
let slide: number = $state(0);
let hover: boolean = $state(false);
let intervalId: number;
const ARROWS = [
    { className: 'left-2', onclick: () => setSlide(false)},
    { className: 'right-2 rotate-180', onclick: () => setSlide(true)}
];
function setSlide(dir: boolean) {
    const length = SLIDES.length;
    if (dir) {
        slide = (slide + 1) % length;
    } else {
        slide = slide === 0 ? length - 1 : slide - 1;
    }
    resetInterval();
}
function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(() => setSlide(true), 3_000);
}

onMount(() => {
    intervalId = setInterval(() => setSlide(true), 3_000);
    return () => clearInterval(intervalId);
});

</script>

<!-- svelte-ignore attribute_invalid_property_name -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
onmouseenter={() => hover = true}
onmouseleave={() => hover = false}
in:fade
class="w-screen items-center flex aspect-5/3 overflow-hidden relative">
    {#each SLIDES as {src, title, profit, button}, i}
        {#if i == slide}
            {#if hover}
                {#each ARROWS as {className, onclick}}
                    <Button {onclick} className="{className} absolute top-1/2 -translate-y-1/2 z-2 bg-black text-white">
                        <Arrow />
                    </Button>
                {/each}
                <!-- <Button className="absolute right-2 top-1/2 -translate-y-1/2 z-2 bg-black text-white">right</Button> -->
            {/if}
            <Slide1 {src} {title} {profit} {button} />
        {/if}
    {/each}
</div>