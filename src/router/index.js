import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/frontend/homepages/Home'
import Register from '@/components/frontend/homepages/Register'
import Login from '@/components/frontend/homepages/Login'
import Talent from '@/components/frontend/homepages/talent'
import Privacy from '@/components/frontend/homepages/privacy'
import Terms from '@/components/frontend/homepages/terms'
import JobBoard from '@/components/frontend/homepages/jobboard'
import RecruiterDashboard from '@/components/frontend/recruiter/Dashboard'
import DeveloperDashboard from '@/components/frontend/developer/DevDashboard'
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/recruiter',
            name: 'recruiter',
            component: RecruiterDashboard
        },
        {
            path: '/developer',
            name: 'developer',
            component: DeveloperDashboard
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/talent',
            name: 'talent',
            component: Talent
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobBoard
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: Privacy
        },
        {
            path: '/terms',
            name: 'terms',
            component: Terms
        },


    ]
})
