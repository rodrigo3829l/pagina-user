import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: {name: 'home-home'}
    },
    {
        path: '/home',
        name: 'home',
        component: () => import ( /* webpackChunkName: "HomeLayout" */ '@/modules/homeModules/layouts/HomeLayout'),
        children: [
            {
                path: 'homeuser',
                name: 'home-home',
                component: () =>  import( /* webpackChunkName: "HomeUser" */ '@/modules/homeModules/pages/HomeUser'),
            },
            {
                path: 'contact',
                name: 'home-contact',
                component: () => import( /* webpackChunkName: "ContactUser" */ '@/modules/homeModules/pages/ContacUser'),
            },
            {
                path: 'answers',
                name: 'home-answers',
                component: () =>  import( /* webpackChunkName: "FreqAnswers" */ '@/modules/homeModules/pages/FreqAnswers'),
            },
            {
                path: '',
                name: 'default-home',
                redirect: {name: 'home-home'},
            },

        ]
    },
    {
        path: '/proyects',
        name: 'proyects',
        component: () => import ( /* webpackChunkName: "Proyect Layout" */ '@/modules/passProjects/layout/ProjectsLayout.vue'),
        children: [
            {
                path: 'destacados',
                name: 'proyects-view',
                component: () =>  import( /* webpackChunkName: "ProjectDetacados" */ '@/modules/passProjects/pages/ProjectDestacados'),
            },
            {
                path: 'info',
                name: 'proyects-info',
                component: () => import( /* webpackChunkName: "InfoProject" */ '@/modules/passProjects/pages/InfoProject'),
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ( /* webpackChunkName: "LoginLayout" */ '@/modules/login/layouts/LoginLayout'),
        children: [
            {
                path: 'loginuser',
                name: 'login-login',
                component: () => import ( /* webpackChunkName: "LoginUser" */ '@/modules/login/pages/LoginUser'),
            },
            {
                path: 'confirm',
                name: 'login-confirm',
                component: () => import ( /* webpackChunkName: "ConfirmPassword" */ '@/modules/login/pages/ConfirmPassword'),
            },
            {
                path: 'location',
                name: 'login-location',
                component: () => import ( /* webpackChunkName: "LocationData" */ '@/modules/login/pages/LocationData'),
            },
            {
                path: 'personal',
                name: 'login-personal',
                component: () => import ( /* webpackChunkName: "PersonalData" */ '@/modules/login/pages/PersonalData'),
            },
            {
                path: 'mail',
                name: 'login-mail',
                component: () => import ( /* webpackChunkName: "SendMail" */ '@/modules/login/pages/SendMail'),
            },
            {
                path: 'userdata',
                name: 'login-userdata',
                component: () => import ( /* webpackChunkName: "UserData" */ '@/modules/login/pages/UserData'),
            },
            {
                path: '',
                name: 'default-login',
                redirect: {name: 'login-login'}
            },

        ]
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import ( /* webpackChunkName: "ProfileLayout" */ '@/modules/profile/layouts/ProfileLayout'),
        children: [
            {
                path: 'editprofile',
                name: 'profile-edit',
                component: () => import ( /* webpackChunkName: "EditProfile" */ '@/modules/profile/pages/EditProfile'),
            },
            {
                path: 'pay',
                name: 'profile-pay',
                component: () => import ( /* webpackChunkName: "PayPage" */ '@/modules/profile/pages/PayPage'),
            },
            {
                path: 'profilepage',
                name: 'profile-profile',
                component: () => import ( /* webpackChunkName: "ProfilePages" */ '@/modules/profile/pages/ProfilePage')
            },
            {
                path: '',
                name: 'default-profile',
                redirect: {name: 'profile-profile'}
            },

        ]
    },
    {
        path: '/services',
        name: 'services',
        component: () => import ( /* webpackChunkName: "ServicesLayout" */ '@/modules/services/layouts/ServicesLayout'),
        children: [
            {
                path: 'servicespage',
                name: 'services-services',
                component: () => import ( /* webpackChunkName: "ServicesWindow" */ '@/modules/services/pages/ServicesWindow'),
            },
            {
                path: 'schedule',
                name: 'services-Schedule',
                component: () => import ( /* webpackChunkName: "ScheduleService" */ '@/modules/services/pages/ScheduleService'),
                
            },
            {
                path: '',
                name: 'default-services',
                redirect: {name: 'services-services'}
            },
        ]
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NotFoundPage'),
    },
    {
        path: '/cookies',
        name: 'cookies',
        component: () => import ( /* webpackChunkName: "cookiesPage" */ '@/modules/shared/pages/cookiesPage'),
    },
    {
        path: '/privacity',
        name: 'privacity',
        component: () => import ( /* webpackChunkName: "cookiesPage" */ '@/modules/shared/pages/privacityPage'),
    },
    {
        path: '/terms',
        name: 'terms',
        component: () => import ( /* webpackChunkName: "termsPage" */ '@/modules/shared/pages/termsPage'),
    },
    {
        path: '/bina',
        name: 'bina',
        component: () => import ( /* webpackChunkName: "bina datos" */ '@/modules/shared/pages/binaData'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router