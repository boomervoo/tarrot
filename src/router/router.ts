import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import('@/components/BackgroundAnimation.vue'),
        },
    ],
});

export default router;
