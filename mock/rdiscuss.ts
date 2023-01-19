import { MockMethod } from "vite-plugin-mock";
import dayjs from "dayjs";

export default [
  {
    url: "/getTalk",
    method: "get",
    response: () => {
      return [
        {
          content: "#创作者有义务提高观众审美门槛吗#",
          href: "https://www.baidu.com"
        },
        {
          content: "#你期待电视剧版三体吗#",
          href: "https://www.baidu.com"
        },
        {
          content: "#前任突然加微信要同意吗#",
          href: "https://www.baidu.com"
        },
        {
          content: "#阳过一次管多久#",
          href: "https://www.baidu.com"
        },
        {
          content: "#高价彩礼是否违法#",
          href: "https://www.baidu.com"
        },
        {
          content: "#发放育儿补贴能否释放生育潜能#",
          href: "https://www.baidu.com"
        },
        {
          content: "#你能接受手机里说分手吗#",
          href: "https://www.baidu.com"
        },
        {
          content: "#00后会消灭酒桌文化吗#",
          href: "https://www.baidu.com"
        },
        {
          content: "#你还拥有朋友圈自由吗#",
          href: "https://www.baidu.com"
        },
        {
          content: "#人们为什么不想听专家说话了#",
          href: "https://www.baidu.com"
        }
      ];
    }
  },
  {
    url: "/getSearch",
    method: "get",
    response: () => {
      return [
        {
          content: "梨泰院踩踏事故调查结果公布",
          href: "https://www.baidu.com"
        },
        {
          content: "女生第1次去男友家洗碗手冻通红",
          href: "https://www.baidu.com"
        },
        {
          content: "新冠治疗费用报销图解",
          href: "https://www.baidu.com"
        },
        {
          content: "男子偷摸未成年被女孩妈妈当街掌掴",
          href: "https://www.baidu.com"
        },
        {
          content: "知乎永久封禁1888万彩礼作者帐号",
          href: "https://www.baidu.com"
        },
        {
          content: "后期抽了一条烟 才把这十秒的烟给抠掉",
          href: "https://www.baidu.com"
        },
        {
          content: "陈佩斯母亲感染新冠去世",
          href: "https://www.baidu.com"
        },
        {
          content: "红豆遥遥冰亲上了",
          href: "https://www.baidu.com"
        },
        {
          content: "日本决定核废水2023春夏排入海",
          href: "https://www.baidu.com"
        },
        {
          content: "成都26岁失联女子申某已找到",
          href: "https://www.baidu.com"
        }
      ];
    }
  },
  {
    url: "/getAllDiscuss",
    method: "get",
    response: () => {
      const date = dayjs(new Date()).format("YYYY-MM-DD");
      return [
        {
          id: "001",
          username: "Tom",
          date,
          text: "Tom",
          topic: "No. 189, Grove St, Los Angeles",
          attitude: 200,
          comment: 50,
          repost: 100
        },
        {
          id: "002",
          username: "Tom",
          date,
          text: "Jack",
          topic: "No. 189, Grove St, Los Angeles",
          attitude: 200,
          comment: 50,
          repost: 100
        },
        {
          id: "003",
          username: "Tom",
          date,
          text: "Dick",
          topic: "No. 189, Grove St, Los Angeles",
          attitude: 200,
          comment: 50,
          repost: 100
        },
        {
          id: "004",
          username: "Tom",
          date,
          text: "Harry",
          topic: "No. 189, Grove St, Los Angeles",
          attitude: 200,
          comment: 50,
          repost: 100
        },
        {
          id: "005",
          username: "Tom",
          date,
          text: "Sam",
          topic: "No. 189, Grove St, Los Angeles",
          attitude: 200,
          comment: 50,
          repost: 100
        },
        {
          id: "006",
          username: "Tom",
          date,
          text: "Lucy",
          topic: "No. 189, Grove St, Los Angeles",
          attitude: 200,
          comment: 50,
          repost: 100
        },
        {
          id: "007",
          username: "Tom",
          date,
          text: "Mary",
          topic: "No. 189, Grove St, Los Angeles",
          attitude: 200,
          comment: 50,
          repost: 100
        },
        {
          id: "008",
          username: "Tom",
          date,
          text: "Mike",
          topic: "No. 189, Grove St, Los Angeles",
          attitude: 200,
          comment: 50,
          repost: 100
        },
        {
          id: "009",
          username: "Tom",
          date,
          text: "Mike",
          topic: "No. 189, Grove St, Los Angeles",
          attitude: 200,
          comment: 50,
          repost: 100
        },
        {
          id: "010",
          username: "Tom",
          date,
          text: "Mike",
          topic: "No. 189, Grove St, Los Angeles",
          attitude: 200,
          comment: 50,
          repost: 100
        },
        {
          id: "011",
          username: "Tom",
          date,
          text: "Mike",
          topic: "No. 189, Grove St, Los Angeles",
          attitude: 200,
          comment: 50,
          repost: 100
        },
        {
          id: "012",
          username: "Tom",
          date,
          text: "Mike",
          topic: "No. 189, Grove St, Los Angeles",
          attitude: 200,
          comment: 50,
          repost: 100
        }
      ];
    }
  }
] as MockMethod[];
