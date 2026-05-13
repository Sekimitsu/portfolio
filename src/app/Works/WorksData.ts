export type Work = {
    type: string;
    title: string;
    skills: string[];
    url: string;
    image: string;
}

export const worksData: Work[] = [
    {
        type: 'Corporate Site',
        title: '株式会社 AEGIS',
        skills: ['HTML', 'SCSS', 'JavaScript', 'WordPress', 'Figma'],
        url: 'https://aegis-service-system.com/',
        image: '/aegis_hp.png',
    },
    {
        type: 'Corporate Site',
        title: '株式会社 EQUAL',
        skills: ['HTML', 'SCSS', 'JavaScript', 'WordPress', 'Figma'],
        url: 'https://equal-inc-service.com/',
        image: '/equal_hp.png',
    },
    {
        type: 'Product Showcase Site',
        title: 'NORDIC ITEMS',
        skills: ['React.js', 'Next.js', 'TypeScript', 'SCSS', 'Figma'],
        url: 'https://nordic-items.vercel.app/',
        image: '/nordic_site.png',
    },
    {
        type: 'Web Application',
        title: 'Task Management App',
        skills: ['React.js', 'Next.js', 'TypeScript', 'SCSS', 'Figma', 'Vercel'],
        url: 'https://task-management-three-flax.vercel.app/',
        image: '/todo_app.png',
    },
    {
        type: 'Web Application',
        title: 'Dashboard App',
        skills: ['React.js', 'Next.js', 'TypeScript', 'SCSS', 'Figma', 'Vercel', 'Firebase'],
        url: 'https://dashboard-one-tawny-43.vercel.app/login',
        image: '/dashboard_app.png',
    },
]