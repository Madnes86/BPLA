import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
    const res = await fetch('/projects.json');
    const all = res.ok ? await res.json() : [];
    const project = all.find((p: any) => p.id === params.id);
    if (!project) error(404, 'Проект не найден');
    return { project };
};
