/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/article',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/article/index'),
      name: 'article',
      meta: {
        title: '文章管理',
        icon: 'chart'
      }
    }
  ]
}

export default chartsRouter
