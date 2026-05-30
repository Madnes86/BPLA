<script lang="ts">
import { onMount } from 'svelte';
import { Wrapper } from '$lib/components';

let { data } = $props();
const p = data.project;
const stages: string[] = p.stages ?? [];
const cur: number = p.stage ?? 0;

let mounted = $state(false);
onMount(() => { mounted = true; });
</script>

<svelte:head><title>{p.title}</title></svelte:head>

<Wrapper col className="items-start gap-4">
    <a href="/projects" class="text-sm text-gray-400 hover:underline">← К проектам</a>
    <h1 class="text-2xl font-semibold">{p.title}</h1>

    <div class="flex flex-col md:flex-row gap-6 w-full items-start">
        <!-- PDF document -->
        <div class="w-full md:flex-1">
            {#if p.pdf}
                <iframe
                    src={p.pdf.path}
                    title={p.title}
                    class="w-full h-[75vh]"
                ></iframe>
                <a
                    href={p.pdf.path}
                    target="_blank"
                    rel="noopener"
                    class="inline-block text-sm text-blue-600 hover:underline mt-2"
                >Открыть PDF в новой вкладке ↗</a>
            {:else}
                <div class="w-full h-[40vh] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                    Документ не прикреплён
                </div>
            {/if}
        </div>

        <!-- Stage side menu (blue, round, animated, read-only) -->
        <aside class="w-full md:w-72 shrink-0 md:sticky md:top-4 self-start rounded-2xl border border-blue-100 bg-blue-50/40 p-5">
            <h2 class="font-semibold mb-5 text-blue-700">Стадии проекта</h2>
            <ol class="flex flex-col">
                {#each stages as s, i}
                    <li
                        class="flex gap-4 pb-8 last:pb-0 relative transition-all duration-500 ease-out {mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}"
                        style="transition-delay: {i * 120}ms"
                    >
                        {#if i < stages.length - 1}
                            <span class="absolute left-4 top-9 bottom-0 w-1 rounded-full bg-blue-100">
                                <span
                                    class="block h-full w-full rounded-full bg-blue-600 origin-top transition-transform duration-700 ease-out {mounted && i < cur ? 'scale-y-100' : 'scale-y-0'}"
                                    style="transition-delay: {i * 250 + 250}ms"
                                ></span>
                            </span>
                        {/if}

                        <span
                            class="relative z-1 grid place-items-center size-9 rounded-full shrink-0 transition-all duration-500
                            {i < cur ? 'bg-blue-600 text-white' : i === cur ? 'bg-blue-600 text-white ring-4' : 'bg-white text-blue-400 border-2 border-blue-200'}"
                            style="transition-delay: {i * 520}ms"
                        >
                            {#if i === cur}
                                <span class="absolute inset-0 rounded-full bg-blue-400 opacity-60 animate-ping"></span>
                            {/if}
                            <span class="relative text-sm font-medium">{i < cur ? '✓' : i + 1}</span>
                        </span>

                        <div class="pt-1.5">
                            <p class="font-medium transition-colors {i === cur ? 'text-blue-700' : i < cur ? 'text-blue-600' : 'text-gray-400'}">
                                {s}
                            </p>
                            {#if i === cur}
                                <p class="text-xs text-blue-400 mt-0.5">текущая стадия</p>
                            {/if}
                        </div>
                    </li>
                {/each}
            </ol>
        </aside>
    </div>
</Wrapper>
