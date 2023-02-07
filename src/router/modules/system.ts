export default {
  path: "/system",
  redirect: "/system/user",
  meta: {
    icon: "setting",
    title: "系统管理",
    rank: 11
  },
  children: [
    {
      path: "/system/history",
      name: "History",
      component: () => import("@/views/system/history/index.vue"),
      meta: {
        icon: "history",
        title: "历史记录管理"
      }
    },
    {
      path: "/system/user",
      name: "User",
      component: () => import("@/views/system/user/index.vue"),
      meta: {
        icon: "user",
        title: "用户管理"
      }
    },
    {
      path: "/system/role",
      name: "Role",
      component: () => import("@/views/system/role/index.vue"),
      meta: {
        icon: "role",
        title: "角色管理"
      }
    }
  ]
} as RouteConfigsTable;
