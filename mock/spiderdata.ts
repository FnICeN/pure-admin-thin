import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/getspider",
    method: "get",
    response: () => {
      return {
        job: "小镇做题家",
        get: 1000,
        analyse: 900,
        pos: 677,
        neg: 223
      };
    }
  },
  {
    url: "/getTimeline",
    method: "get",
    response: () => {
      return [
        {
          content: "【新冠疫苗】任务开始执行",
          timestamp: "4天前",
          // icon: markRaw(useRenderFlicker({ background: "#67C23A" }))
          //绿色闪烁
          nicon: 1
        },
        {
          content: "【新冠疫苗】任务正常结束",
          timestamp: "3天前",
          color: "#409EFF"
        },
        {
          content: "【美团外卖】任务开始执行",
          timestamp: "昨天",
          // icon: markRaw(useRenderFlicker({ background: "#67C23A" }))
          nicon: 1
        },
        {
          content: "【阿凡达】任务出错",
          timestamp: "2小时前",
          // icon: markRaw(useRenderFlicker({ background: "#F56C6C" }))
          //红色闪烁
          nicon: 2
        },
        {
          content: "【美团外卖】任务正常结束",
          timestamp: "50分钟前",
          color: "#409EFF"
        },
        {
          content: "【小镇做题家】任务继续执行",
          timestamp: "30秒前"
        }
      ];
    }
  },
  {
    url: "/submitConf",
    method: "post",
    response: ({ body }) => {
      if (body.weiboType) {
        return {
          success: true
        };
      } else
        return {
          success: false
        };
    }
  }
] as MockMethod[];
