<script lang="ts">
import { Flex, Wrapper, Spacer, Button } from '$lib/components';
import { fade, fly } from 'svelte/transition';

const SERVICES: {title: string, text: string, src: string}[] = [
    { title: '3D печать', text: 'Создаем прототипы и детали любой сложности на современных 3D принтерах. Быстрое воплощение ваших идей в качественные физические объекты.', src: "/printer.jpg" },
    { title: 'Полеты на симуляторе', text: 'Реалистичные тренировки на профессиональных авиасимуляторах. Освойте управление самолетом в безопасных условиях с опытными инструкторами.', src: "/simulator.svg" },
    { title: 'Проектирование 3D моделей', text: 'Разработка и оптимизация 3D моделей для печати. Поможем подготовить ваш проект к успешной реализации.', src: "/model.svg" },
    { title: 'Полеты на дронах', text: 'Профессиональная аэросъемка и обучение пилотированию дронов. От базовых навыков до сложных маневров и коммерческой съемки.', src: "https://img.freepik.com/premium-vector/isometric-drone-camera_854353-581.jpg?ga=GA1.1.1881532403.1759726065&semt=ais_hybrid&w=740&q=80" }
];

let hovered: number[] = $state([0]);
let width: number = $state(0);
const add = (i: number) => hovered.push(i);

</script>

<svelte:window bind:innerWidth={width} />

<Wrapper className="max-md:w-80 flex-col items-start">
    <h2 id="services" class="text-gray-300">Услуги</h2>
    <Flex col>
        {#each SERVICES as {title, text, src}, i (title)}
            <Flex className="{i % 2 == 1 ? 'flex-row-reverse' : ''} max-md:flex-col md:w-full">
                <Spacer />
                {#if hovered.includes(i) || 768 > width}
                <div transition:fly={{ x: 100 }} class="translate-y-6 gap-4 flex flex-col">
                    <h3>{title}</h3>
                    <p class="text-justify">{text}</p>
                    <Button className="bg-black text-white">Подробнее</Button>
                </div>
                {/if}
                <div class="min-w-100 relative">
                    <img onmouseenter={() => add(i)} {src} alt="" class="w-100">
                    {#if !hovered.includes(i) && 768 < width}
                        <div out:fade class="animate-bounce absolute left-50 top-8 size-4 rounded-full bg-blue-400"></div>
                    {/if}
                </div>
            </Flex>
        {/each}
    </Flex>
</Wrapper>


