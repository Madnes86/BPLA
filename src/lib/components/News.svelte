<script lang="ts">
import { onMount } from 'svelte';
import { Flex, Wrapper, Button, New, Modal, Paginator, Content } from '$lib/components';
import { technology, article } from '$lib/icons';
import type { INew, ITag } from '$lib/interface';

let tags: ITag[] = [
    { icon: technology, name: 'Проект', color: 'orange' },
    { icon: article, name: 'Статья', color: 'green' },
    { icon: article, name: 'Событие', color: 'red' },
    { icon: article, name: 'Отчёт', color: 'blue'}
];
let hover: number = $state(-1);
let show: boolean = $state(false);
let selTag: ITag | null = $state(null);
let allNews: INew[] = $state([]);
let selNew: INew | null = $state(null);

onMount(async () => {
    try {
        const res = await fetch('/news.json');
        if (!res.ok) return;
        const data = await res.json();
        allNews = data.map((e: any) => ({ ...e, date: new Date(e.date) }));
    } catch {
        allNews = [];
    }
});

const PER_PAGE = 12;
let page = $state(0);
let news = $derived.by(() => {
    const list = selTag ? allNews.filter(e => e.tag == selTag?.name) : allNews;
    return [...list].sort((a, b) => b.date.getTime() - a.date.getTime());
});
let pageCount = $derived(Math.max(1, Math.ceil(news.length / PER_PAGE)));
let paged = $derived(news.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE));
function setNew(e: INew) {
    selNew = e;
    show = true;
}
function setTag(tag: ITag) {
    selTag = selTag?.name == tag.name ? null : tag;
    page = 0;
}
function getColor(tag: string | undefined): string {
    const foundTag = tags.find(e => e.name == tag);
    return foundTag ? foundTag.color : 'gray';
}
</script>

<Wrapper className="flex-col items-start">
    <h2 id="news" class="text-gray-300 my-4">Последнии новости</h2>
    <Flex className="flex-wrap">
        {#each tags as {icon: Icon, name, color}, i}
            <Button 
                onclick={() => setTag(tags[i])} 
                style={selTag?.name == name ? `background: ${color}; color: white; border-color: ${color}` : `border-color: ${color}; color: ${color}`} 
                className="border-2 p-1!">
                <Icon fill={selTag?.name == name ? 'white' : `${color}`}/>
                <p>{name}</p>
            </Button>
        {/each}
    </Flex>
    <Flex className="flex-wrap gap-5 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {#each paged as item, i}
            <New
            onclick={() => setNew(item)}
            onmouseenter={() => hover = i}
            onmouseleave={() => hover = -1}
            {item}
            hover={hover == i}
            color={getColor(item.tag)}/>
        {/each}
    </Flex>
    {#if pageCount > 1}
        <Flex className="w-full justify-center">
            <Paginator bind:currentPage={page} pages={pageCount} />
        </Flex>
    {/if}
</Wrapper>

{#if show}
    <Modal bind:show={show} lineColor={getColor(selNew?.tag || '')}>
        {#snippet header()}
            <h3 class="whitespace-nowrap">
                {selNew?.title}
            </h3>
        {/snippet}
        {#if selNew?.imgs?.length}
            <div class="min-h-150 flex gap-8 overflow-auto snap-x snap-mandatory">
                {#each selNew?.imgs ?? [] as src}
                    <img {src} alt="" class="snap-center size-150 object-cover">
                {/each}
            </div>
        {/if}
        <Content md={selNew?.text || ''} />
    </Modal>
{/if}