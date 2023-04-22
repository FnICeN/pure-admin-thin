export default {
  path: "/high",
  redirect: "/high/jointDecision",
  meta: {
    icon: "chatdot",
    title: "高级功能",
    rank: 20
  },
  children: [
    {
      path: "/high/jointDecision",
      name: "Joint",
      component: () => import("@/views/high/index.vue"),
      meta: {
        icon: "coDecision",
        title: "联合决策模型",
        roles: ["admin", "plus"]
      }
    },
    {
      path: "/high/originDetect",
      name: "Detect",
      component: () => import("@/views/high/index.vue"),
      meta: {
        icon: "view",
        title: "热点溯源",
        roles: ["admin", "plus"]
      }
    }
  ]
} as RouteConfigsTable;
