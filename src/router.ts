import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior } from 'vue-router';

function loadView(view: string) {
    return () => import('./views/' + view + '.vue');
}

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'HomeView',
        component: loadView('HomeView'),
        meta: { requiresAuth: false, title: 'navigation.home.title', visible: true },
    },
    {
        path: '/example',
        name: 'ExampleView',
        component: loadView('PageView'),
        meta: {
            requiresAuth: false,
            title: 'navigation.example.title',
            visible: true,
        },
        children: [
            {
                path: '/example',
                redirect: '/example/reactivity',
                meta: { visible: false },
            },
            {
                path: '/example/reactivity',
                name: 'ReactivityView',
                component: loadView('examples/ReactivityView'),
                meta: {
                    requiresAuth: false,
                    title: 'navigation.example.children.reactivity',
                    visible: true,
                },
            },
            {
                path: '/example/store',
                name: 'StoreView',
                component: loadView('examples/StoreView'),
                meta: {
                    requiresAuth: false,
                    title: 'navigation.example.children.store',
                    visible: true,
                },
            },
        ],
    },
    {
        path: '/table',
        name: 'TableView',
        component: loadView('PageView'),
        meta: {
            requiresAuth: false,
            title: 'navigation.table.title',
            visible: true,
        },
        children: [
            {
                path: '/table',
                redirect: '/table/local',
                meta: { visible: false },
            },
            {
                path: '/table/local',
                name: 'TableLocalView',
                component: loadView('TableView'),
                meta: {
                    requiresAuth: false,
                    title: 'navigation.table.children.local',
                    visible: true,
                },
            },
            {
                path: '/table/async',
                name: 'TableAsyncView',
                component: loadView('TableAsync'),
                meta: {
                    requiresAuth: false,
                    title: 'navigation.table.children.async',
                    visible: true,
                },
            },
        ],
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFoundView',
        component: loadView('errors/NotFound'),
        meta: { requiresAuth: false, title: 'navigation.home.title', visible: false },
    },
];

const scrollBehavior: RouterScrollBehavior = (to) => {
    if (to.hash) {
        return { selector: to.hash };
    }
    return { left: 0, top: 0 };
};

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes,
    scrollBehavior,
});
router.beforeEach((to, from, next) => {
    next();
});
export { router };
