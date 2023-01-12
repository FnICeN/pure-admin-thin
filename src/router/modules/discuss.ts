const IFrame = () => import("@/layout/frameView.vue");
export default {
  path: "/discuss",
  redirect: "/discuss/LDA",
  meta: {
    icon: "chatdot",
    title: "话题",
    rank: 10
  },
  children: [
    {
      path: "/discuss/hot",
      name: "Hot",
      component: () => import("@/views/discuss/hot/index.vue"),
      meta: {
        icon: "flag",
        title: "当今热点"
      }
    },
    {
      path: "/discuss/current",
      name: "Current",
      component: () => import("@/views/discuss/current/index.vue"),
      meta: {
        icon: "friger",
        title: "当前话题数据"
      }
    },
    {
      path: "/discuss/LDA",
      component: IFrame,
      meta: {
        icon: "search",
        title: "LDA分析",
        frameSrc: "http://localhost:8848/html/positive.html"
      }
    }
  ]
} as RouteConfigsTable;
