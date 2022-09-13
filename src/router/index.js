import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: 'Home ',
      color: '#0277bd',
    }
  },
  {
    path: '/study-Jams',
    name: 'Study Jams',
    component: () => import( /* webpackChunkName: "StudyJam"*/ '@/views/StudyJam.vue'),
    meta: {
      title: 'Study Jams',
      color: '#0277bd'
    }
  },
  {
    path: '/codelab',
    name: 'Codelab',
    component: () => import( /* webpackChunkName: "codelab" */ '../views/Codelab.vue'),
    meta: {
      title: 'Codelab ',
      color: '#0277bd',
    }
  },
  {
    path: '/demos',
    name: 'Demos',
    component: () => import(/* webpackChunkName* "demos"*/ '@/views/Demos.vue'),
    meta: {
      title: 'Demos',
      color: '#0277bd'
    }
  },
  // {
  //   path: '/Solution-Challenge',
  //   name: 'Solution Challenge',
  //   component: ()=>import(/* webpackChunkName: "Solution Challenge" */ '@/views/SolutionChallenge')
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About ',
      color: '#0277bd',
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import( /* webpackChunkName: "faq" */ '../views/FAQ.vue'),
    meta: {
      title: 'FAQ ',
      color: '#0277bd',
    }
  },
  {
    path: '/Backend',
    name:'Backend',
    component: () => import(/* webpackChunkName: "faq" */ '../views/TechTeams/WebDev.vue'),
    meta: {
      title: 'Backend',
      color: '#0277bd',
    }
  },
  {
    path: '/clouddev',
    name:'Cloud Dev',
    component: () => import(/* webpackChunkName: "faq" */ '../views/TechTeams/CloudDev.vue'),
    meta: {
      title: 'CloudDev',
      color: '#0277bd',
    }
  },
  {
    path: '/designdev',
    name:'Design Dev',
    component: () => import(/* webpackChunkName: "faq" */ '../views/TechTeams/uxUi.vue'),
    meta: {
      title: 'Design Dev',
      color: '#0277bd',
    }
  },  
  {
    path: '/ds&ml',
    name:'DS & ML',
    component: () => import(/* webpackChunkName: "faq" */ '../views/TechTeams/DS&ML.vue'),
    meta: {
      title: 'Ds&Ml',
      color: '#0277bd',
    }
  },
  {
    path: '/object-detection',
    name: "Detección de objetos",
    component: () => import(/* webpackChunkName "computer vision"*/ '@/components/Demos/ObjectDetection'),
    meta: {
      title: 'detección de objetos',
      color: '#0277bd'
    }
  },
  {
    path:'/markdown2html',
    name: "markdown",
    component: () => import(/* webpackChunkName "markdown2html"*/ '@/components/Demos/Markdown2html'),
    meta: {
      title: 'markdwon2html',
      color: '#0277bd'
    }
  },
  {
    path:'/content',
    name: "Content",
    component: () => import('@/views/SJContent.vue'),
    meta: {
      title: 'content',
      color: '#0277bd'
    }
  },
  {
    path:'/study-jam/:id',
    component: () => import('@/views/SJContent.vue'),
  },
  {
    path: '*',
    name: 'redirect',
    redirect: {
      path: '/'
    },
    meta: {
      title: `Redirect `,
      color: "#0277bd",
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router