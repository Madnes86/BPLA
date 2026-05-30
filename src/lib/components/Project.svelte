<script lang="ts">
let { project } = $props();

function fmtDate(d: string): string {
    return d ? new Date(d).toLocaleDateString('ru-RU') : '';
}
</script>

<a
    href={`/projects/${project.id}`}
    class="block border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
>
    {#if project.src}
        <img src={project.src} alt={project.title} class="w-full aspect-video object-cover" />
    {:else}
        <div class="w-full aspect-video bg-gray-100 flex items-center justify-center text-gray-400">
            Без обложки
        </div>
    {/if}
    <div class="p-3">
        <h3 class="font-semibold line-clamp-2">{project.title}</h3>
        <p class="text-sm text-gray-400 mt-1">Начало: {fmtDate(project.date)}</p>
    </div>
</a>
