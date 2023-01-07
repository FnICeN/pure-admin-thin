export interface ListItem {
  avatar: string;
  title: string;
  datetime: string;
  type: string;
  description: string;
  status?: "" | "success" | "warning" | "info" | "danger";
  extra?: string;
}

export interface TabItem {
  key: string;
  name: string;
  list: ListItem[];
}

export const noticesData: TabItem[] = [
  {
    key: "1",
    name: "通知",
    list: [
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
        title: "舆情趋势变化",
        datetime: "30分钟前",
        description: "您监控的【小镇做题家】话题总体趋势有新变化",
        type: "1"
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
        title: "舆情趋势变化",
        datetime: "一小时前",
        description: "您监控的【美团外卖】话题总体趋势有新变化",
        type: "1"
      },
      // {
      //   avatar:
      //     "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",
      //   title: "这种模板可以区分多种通知类型",
      //   datetime: "一年前",
      //   description: "",
      //   type: "1"
      // }
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "欢迎使用",
        datetime: "一年前",
        description: "欢迎使用舆情监测系统！",
        type: "1"
      }
    ]
  },
  {
    key: "2",
    name: "消息",
    list: [
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "李白",
        description: "考虑监测一下有关疫情的话题吧！",
        datetime: "一周前",
        type: "2"
      }
    ]
  },
  {
    key: "3",
    name: "任务动态",
    list: [
      {
        avatar: "",
        title: "【小镇做题家】任务",
        description: "监测到舆情状态改变，本任务继续进行",
        datetime: "30秒前",
        extra: "执行中",
        status: "info",
        type: "3"
      },
      {
        avatar: "",
        title: "【美团外卖】任务",
        description: "长时间无新增博文，任务自动结束",
        datetime: "50分钟前",
        extra: "已结束",
        status: "danger",
        type: "3"
      },
      {
        avatar: "",
        title: "【阿凡达】任务",
        description: "爬虫程序执行出错",
        datetime: "2小时前",
        extra: "异常",
        status: "warning",
        type: "3"
      },
      {
        avatar: "",
        title: "【美团外卖】任务",
        description: "监测任务开始执行",
        datetime: "昨天",
        extra: "执行中",
        status: "info",
        type: "3"
      },
      {
        avatar: "",
        title: "【新冠疫苗】任务",
        description: "任务到时正常结束",
        datetime: "3天前",
        extra: "已结束",
        status: "success",
        type: "3"
      }
    ]
  }
];
