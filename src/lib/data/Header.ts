import { service, news, team, technology } from '$lib/icons';
export const NAVS: { name: string, href: string, icon: any}[] = [
    { name: 'Услуги', href: '#services', icon: service },
    { name: 'Новости', href: '#news', icon: news },
    { name: 'Проекты', href: '/projects', icon: technology },
    { name: 'О нас', href: '#team', icon: team }
];