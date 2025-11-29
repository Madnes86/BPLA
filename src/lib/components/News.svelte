<script lang="ts">
import { Flex, Wrapper, Button, New, Modal, Paginator } from '$lib/components';
import { technology, article } from '$lib/icons';
import { NEWS } from '$lib/data/News';
import type { INew, ITag } from '$lib/interface';

let tags: ITag[] = [
    { icon: technology, name: 'Технологии', color: 'blue' },
    { icon: technology, name: 'Проект', color: 'blue' },
    { icon: article, name: 'Статья', color: 'yellow' },
    { icon: article, name: 'Событие', color: 'red' }
];
let hover: number = $state(-1);
let show: boolean = $state(false);
let selTag: ITag | null = $state(null);
let news = $derived.by(() => {
    let news = selTag ? NEWS.filter(e => e.tag == selTag?.name) : NEWS;
    return news.filter(e => e.date <= new Date()).reverse();
});
// svelte-ignore state_referenced_locally
let selNew: INew = $state(news[0]);
function setNew(e: INew) {
    selNew = e;
    show = true;
}
function setTag(tag: ITag) {
    selTag = selTag?.name == tag.name ? null : tag
}
function getColor(tag: string): string {
    const foundTag = tags.find(e => e.name == tag);
    return foundTag ? foundTag.color : 'gray';
}
</script>

<Wrapper className="flex-col items-start">
    <h2 class="text-gray-300 my-4">Последнии новости</h2>
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
        {#each news as item, i}
            <New 
            onclick={() => setNew(item)} 
            onmouseenter={() => hover = i}
            onmouseleave={() => hover = -1}
            {item}
            hover={hover == i}
            color={getColor(item.tag)}/>
        {/each}
    </Flex>
    <Flex className="w-full justify-center">
        <Paginator currentPage={2} pages={6} />
    </Flex>
</Wrapper>

{#if show}
    <Modal bind:show={show}>
        {#snippet header()}
            <h3 class="whitespace-nowrap">
                {selNew?.title}
            </h3>
        {/snippet}
        <div>
            {#each selNew.imgs as src}
                <img {src} alt="" class="w-80">
            {/each}
        </div>
        <div class="max-h-120 overflow-auto">
            {@html selNew?.text}
        </div>
    </Modal>
{/if}