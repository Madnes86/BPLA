<script lang="ts">
import { Flex, Wrapper, Button, Modal } from '$lib/components';
import { technology, article } from '$lib/icons';
import { NEWS } from '$lib/data/News';
import type { INew, ITag } from '$lib/interface';

let tags: ITag[] = [
    { icon: technology, name: 'Технологии', color: 'blue' },
    { icon: article, name: 'Статья', color: 'yellow' }
];
let hover: number = $state(1000);
let show: any = $state(false);
let selected: INew = $state(NEWS[0]);
let selectedTag: ITag | null = $state(null);
let news = $derived.by(() => {
    let el = selectedTag ? NEWS.filter(e => e.tag == selectedTag?.name) : NEWS;
    return el.filter(e => e.date <= new Date()).reverse();
});
function setSelected(e: INew) {
    selected = e;
    show = true;
}
function setTag(tag: ITag) {
    if (selectedTag?.name != tag.name) {
        selectedTag = tag;
    } else {
        selectedTag = null;
    }
}
function getColor(tag: string): string {
    const foundTag = tags.find(e => e.name == tag);
    return foundTag ? foundTag.color : 'gray';
}
</script>

<Wrapper className="flex-col items-start">
    <h2 class="text-gray-300 my-4">Последнии новости</h2>
    <Flex>
        {#each tags as {icon: Icon, name, color}, i}
            <Button onclick={() => setTag(tags[i])} style={selectedTag?.name == name ? `background: ${color}; color: white; border-color: ${color}` : `border-color: ${color}; color: ${color}`} className="border-2 p-1!">
                <Icon fill={selectedTag?.name == name ? 'white' : `${color}`}/>
                <p>{name}</p>
            </Button>
        {/each}
    </Flex>
    <Flex className="flex-wrap gap-5 m-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {#each news as {src, title, imgs, text, tag, date}, i}
            <Flex 
                col 
                onclick={() => {setSelected(NEWS[i])}} 
                onmouseenter={() => hover = i} 
                onmouseleave={() => hover = 1000} 
                style="background: {getColor(tag)}" 
                className="min-w-50 max-w-70 w-full text-white click">
                <div class="overflow-hidden">
                    <img src={src} alt="" class="{hover == i && 'scale-115'} transition-all object-cover aspect-4/3">
                </div>
                <h3 class="text-ellipsis p-2 w-full h-22 text-center">{title}</h3>
                <p class="p-2">{date.toLocaleDateString('ru-RU')}</p>
            </Flex>
        {/each}
    </Flex>
</Wrapper>

{#if show}
    <Modal bind:show={show}>
        {#snippet header()}
            <h3 class="whitespace-nowrap">
                {selected?.title}
            </h3>
        {/snippet}
        <div>
            {#each selected.imgs as src}
                <img {src} alt="" class="w-80">
            {/each}
        </div>
        <div class=" overflow-auto">
            {@html selected?.text}
        </div>
    </Modal>
{/if}