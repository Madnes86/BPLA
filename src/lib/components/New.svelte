<script lang="ts">
import { Flex } from '$lib/components';
import type { INew } from '$lib/interface';
let {
    item,
    hover,
    color,
    ...rest
} : {
    item: INew;
    hover?: boolean;
    color?: string;
} = $props();
console.log(color)
</script>

<Flex 
col 
style="background: {hover && color}; color: {hover ? 'white' : 'black'}"
className="min-w-50 max-w-70 w-full gap-0! cursor-pointer" {...rest}>
    <div 
    style="border-bottom: solid 10px {color}"
    class="overflow-hidden">
        <img 
        src={item.src} 
        alt={item.title} 
        class="{hover && 'scale-115'} transition-all object-cover aspect-4/3">
    </div>
    <h3 
    class="text-ellipsis p-2 w-full h-22 text-center">{item.title}</h3>
    <p class="p-2">{item.date.toLocaleDateString('ru-RU')}</p>
</Flex>
