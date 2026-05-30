<script lang="ts">
import { Flex, Wrapper, Spacer, Button, Modal } from '$lib/components';
import { fade, fly } from 'svelte/transition';

const SERVICES: {title: string, text: string, src: string}[] = [
    { title: '3D печать', text: 'Создаем прототипы и детали любой сложности на современных 3D принтерах. Быстрое воплощение ваших идей в качественные физические объекты.', src: "/printer.jpg" },
    { title: 'Полеты на симуляторе', text: 'Реалистичные тренировки на профессиональных авиасимуляторах. Освойте управление самолетом в безопасных условиях с опытными инструкторами.', src: "/simulator.svg" },
    { title: 'Проектирование 3D моделей', text: 'Разработка и оптимизация 3D моделей для печати. Поможем подготовить ваш проект к успешной реализации.', src: "/model.svg" },
    { title: 'Полеты на дронах', text: 'Профессиональная аэросъемка и обучение пилотированию дронов. От базовых навыков до сложных маневров и коммерческой съемки.', src: "https://img.freepik.com/premium-vector/isometric-drone-camera_854353-581.jpg?ga=GA1.1.1881532403.1759726065&semt=ais_hybrid&w=740&q=80" }
];

let hovered: number[] = $state([0]);
let width: number = $state(0);
let show: boolean = $state(false);
let selSer: {title: string, text: string, src: string} = $state(SERVICES[0]);
const add = (i: number) => hovered.push(i);

const BOT_URL = 'https://t.me/BPLA86_BOT';
// per-service payload so the request link carries which service it is for
const SERVICE_SLUGS = ['print3d', 'simulator', 'model3d', 'drones'];
const botLink = (s: { title: string }) =>
    `${BOT_URL}?start=service_${SERVICE_SLUGS[SERVICES.findIndex(x => x.title === s.title)] ?? ''}`;

function openService(s: { title: string, text: string, src: string }) {
    selSer = s;
    show = true;
}
</script>

<svelte:window bind:innerWidth={width} />

<Wrapper className="max-md:w-80 flex-col items-start">
    <h2 id="services" class="text-gray-300">Услуги</h2>
    <Flex col>
        {#each SERVICES as {title, text, src}, i (title)}
            <Flex className="{i % 2 == 1 ? 'flex-row-reverse' : ''} max-md:flex-col md:w-full">
                <Spacer />
                {#if hovered.includes(i) || 768 > width}
                <div transition:fly={{ x: 100 }} class="gap-4 flex flex-col">
                    <h3>{title}</h3>
                    <p class="text-justify">{text}</p>
                    <Button onclick={() => openService(SERVICES[i])} className="bg-black text-white">Подробнее</Button>
                </div>
                {/if}
                <div class="md:min-w-100 relative">
                    <img onmouseenter={() => add(i)} {src} alt="" class="w-100">
                    {#if !hovered.includes(i) && 768 < width}
                        <div out:fade class="animate-bounce absolute left-50 top-8 size-4 rounded-full bg-blue-400"></div>
                    {/if}
                </div>
            </Flex>
        {/each}
    </Flex>
</Wrapper>

{#if show}
    <Modal bind:show={show}>
        <h2>{selSer.title}</h2>
        <p class="my-3">{selSer.text}</p>
        <a
            href={botLink(selSer)}
            target="_blank"
            rel="noopener"
            class="inline-flex gap-2 border-sm p-2 click justify-center bg-black text-white"
        >Оставить заявку в Telegram</a>
    </Modal>
{/if}
