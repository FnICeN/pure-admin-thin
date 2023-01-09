export default {
  path: "/spider",
  redirect: "/spider/general",
  meta: {
    icon: "aim",
    title: "爬虫",
    rank: 9
  },
  children: [
    {
      path: "/spider/general",
      name: "Spider-general",
      component: () => import("@/views/spider/spider-general/index.vue"),
      meta: {
        icon: "watch",
        title: "爬虫总览"
      }
    },
    {
      path: "/spider/controll",
      name: "spider-controll",
      component: () => import("@/views/spider/spider-controll/index.vue"),
      meta: {
        icon: "setup",
        title: "爬虫控制"
      }
    }
  ]
} as RouteConfigsTable;
