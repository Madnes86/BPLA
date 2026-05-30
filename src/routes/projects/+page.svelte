<script lang="ts">
import { Wrapper } from '$lib/components';
import Project from '$lib/components/Project.svelte';

let { data } = $props();
</script>

<svelte:head><title>Проекты</title></svelte:head>

<Wrapper col className="items-start min-h-[80vh]">
    <h1 class="text-2xl font-semibold my-4">Текущие проекты</h1>

    {#if data.projects.length === 0}
        <p class="text-gray-400">Сейчас активных проектов нет.</p>
    {:else}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
            {#each data.projects as p (p.id)}
                <Project project={p} />
            {/each}
        </div>
    {/if}
</Wrapper>
