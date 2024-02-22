import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../components/SignUp.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import AboutUs from '../views/AboutUs.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import DetailLocation from '../views/DetailLocation.vue'
import Login from '../components/Login.vue'
import Admin from '../components/Admin.vue'
import UserProfile from '../components/UserProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: "homeview",
          component: HomeView
        },
        {
          path: '/about',
          name: "aboutus",
          component: AboutUs
        },
        {
          path: '/contact',
          name: "contact",
          component: Contact
        },
        {
          path: '/services',
          name: "services",
          component: Services
        },
      
      ]
    },
    {
      path: '/singup',
      name: "signup",
      component: SignUp
    },
    {
      path: '/login',
      name: "login",
      component: Login
    },
    {
      path: '/detaillocation',
      name: "detaillocation",
      component: DetailLocation
    },
    {
      path: '/admin',
      name: "admin",
      component: Admin
    },
    {
      path: '/userprofile',
      name: "userprofile",
      component: UserProfile
    },
  ]
})

export default router
