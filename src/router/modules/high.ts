export default {
  path: "/high",
  // redirect: "/high",
  component: () => import("@/views/high/index.vue"),
  meta: {
    icon: "chatdot",
    title: "高级功能",
    rank: 20
  }
} as RouteConfigsTable;
