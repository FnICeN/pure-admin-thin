import { addIcon } from "@iconify/vue/dist/offline";

/**
 * 这里存放本地图标，在 src/layout/index.vue 文件中加载，避免在首启动加载
 */

// 本地菜单图标，后端在路由的icon中返回对应的图标字符串并且前端在此处使用addIcon添加即可渲染菜单图标
import HomeFilled from "@iconify-icons/ep/home-filled";
import InformationLine from "@iconify-icons/ri/information-line";
import Lollipop from "@iconify-icons/ep/lollipop";
import Aim from "@iconify-icons/ep/aim";
import Setting from "@iconify-icons/ep/setting";
import Watch from "@iconify-icons/ep/stopwatch";
import ChatDot from "@iconify-icons/ep/chat-dot-round";
import Flag from "@iconify-icons/ep/flag";
import Refrigerator from "@iconify-icons/ep/refrigerator";
import Search from "@iconify-icons/ep/search";
import Setup from "@iconify-icons/ep/set-up";
import History from "@iconify-icons/ep/files";
import User from "@iconify-icons/ep/user";
import Role from "@iconify-icons/ri/admin-fill";

addIcon("homeFilled", HomeFilled);
addIcon("informationLine", InformationLine);
addIcon("lollipop", Lollipop);
addIcon("aim", Aim);
addIcon("setting", Setting);
addIcon("watch", Watch);
addIcon("chatdot", ChatDot);
addIcon("flag", Flag);
addIcon("friger", Refrigerator);
addIcon("search", Search);
addIcon("setup", Setup);
addIcon("history", History);
addIcon("user", User);
addIcon("role", Role);
