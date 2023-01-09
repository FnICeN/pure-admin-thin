export default {
  path: "/system",
  redirect: "/system/user",
  meta: {
    icon: "setting",
    title: "系统管理",
    rank: 10
  },
  children: [
    {
      path: "/system/user",
      name: "UserControll",
      component: () => import("@/views/system/user/index.vue"),
      meta: {
        icon: "user",
        title: "用户管理"
      }
    },
    {
      path: "/system/role",
      name: "RoleControll",
      component: () => import("@/views/system/role/index.vue"),
      meta: {
        icon: "role",
        title: "角色管理"
      }
    }
  ]
} as RouteConfigsTable;
