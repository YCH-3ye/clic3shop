import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './views/Login/Login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () =>
        import(/* webpackChunkName: "index" */ './views/Index/index.vue')
    }
  ]
})
router.afterEach((to, from) => {
  console.log(to.name, from.name)
})

router.beforeEach((to, from, next) => {
  let token = window.sessionStorage.getItem('token')
  if (!token && to.pash !== '/login') {
    return next('/login')
  }
  next()
})
export default router
