const IFrame = () => import("@/layout/frameView.vue");
export default {
  path: "/discuss",
  redirect: "/discuss/LDA",
  meta: {
    icon: "informationLine",
    title: "话题",
    rank: 10
  },
  children: [
    {
      path: "/discuss/LDA",
      component: IFrame,
      meta: {
        title: "LDA分析",
        // showParent: true,
        frameSrc: "http://localhost:8848/html/positive.html"
      }
    }
  ]
} as RouteConfigsTable;
