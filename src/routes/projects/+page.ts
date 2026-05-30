import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    try {
        const res = await fetch('/projects.json');
        if (!res.ok) return { projects: [] };
        const all = await res.json();
        const projects = all
            .filter((p: any) => p.status === 'active')
            .sort((a: any, b: any) => (b.date ?? '').localeCompare(a.date ?? ''));
        return { projects };
    } catch {
        return { projects: [] };
    }
};
