const talkData = [
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
const searchData = [
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
const tableData = talkData.map((obj, index) => {
  return {
    talkHot: obj.content,
    searchHot: searchData[index].content,
    talkHref: obj.href,
    searchHref: searchData[index].href
  };
});

export { tableData };
