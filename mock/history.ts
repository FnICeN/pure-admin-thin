import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/getHistoryData",
    method: "get",
    response: () => {
      return [
        {
          topic: "主题三",
          ctime: "两小时前"
        },
        {
          topic: "主题二",
          ctime: "昨天"
        },
        {
          topic: "主题一",
          ctime: "2天前"
        }
      ];
    }
  },
  {
    url: "/changeTo",
    method: "post",
    response: () => {
      return { success: true };
    }
  },
  {
    url: "/delTopicData",
    method: "post",
    response: () => {
      return { success: true };
    }
  }
] as MockMethod[];
