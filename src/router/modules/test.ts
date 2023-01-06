export default {
  path: "/test",
  meta: {
    title: "测试页面",
    icon: "lollipop",
    rank: 20
  },
  children: [
    {
      path: "/test/demo",
      name: "Test",
      component: () => import("@/views/test/demo.vue"),
      meta: {
        title: "测试",
        showParent: true
      }
    }
  ]
} as RouteConfigsTable;
