const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/welcome",
  meta: {
    icon: "homeFilled",
    title: "首页",
    rank: 0
  },
  children: [
    {
      path: "/welcome",
      name: "Data-view",
      component: () => import("@/views/data-view/index.vue"),
      meta: {
        title: "首页"
      }
    }
  ]
} as RouteConfigsTable;
