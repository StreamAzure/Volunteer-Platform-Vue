import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/components/Index.vue'
import Register from '@/components/Register.vue'
import Log from '@/components/Log.vue'
import Person from '@/components/Person.vue'
import Apply from '@/components/Apply.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          component: Index,
        },
        {
          path: '/register',
          component: Register,
        },
        {
          path:'/log',
          component: Log,
        },
        {
          path:'/person',
          component: Person,
        },
        {
          path:'/apply',
          component: Apply,
        }
    ],
    scrollBehavior(to, from, savedPosition) {
      // 如果有 savedPosition，则滚动到保存的位置
      if (savedPosition) {
        return savedPosition;
      }
  
      // 否则，滚动到页面顶部
      return { top: 0 };
    },
})

export default router