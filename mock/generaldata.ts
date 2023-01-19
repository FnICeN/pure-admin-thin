import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/getCurrentData",
    method: "get",
    response: () => {
      return [
        {
          date: "2016-05-02",
          opinion: "正向",
          text: "舆情内容"
        },
        {
          date: "2016-05-04",
          opinion: "正向",
          text: "舆情内容"
        },
        {
          date: "2016-05-01",
          opinion: "负向",
          text: "舆情内容"
        },
        {
          date: "2016-05-03",
          opinion: "负向",
          text: "舆情内容"
        },
        {
          date: "2016-05-03",
          opinion: "负向",
          text: "舆情内容"
        },
        {
          date: "2016-05-03",
          opinion: "负向",
          text: "舆情内容"
        },
        {
          date: "2016-05-03",
          opinion: "负向",
          text: "舆情内容"
        },
        {
          date: "2016-05-03",
          opinion: "负向",
          text: "舆情内容"
        },
        {
          date: "2016-05-03",
          opinion: "负向",
          text: "舆情内容"
        }
      ];
    }
  },
  {
    url: "/getAnotherData",
    method: "get",
    response: () => {
      return [
        {
          date: "2023/1/1",
          pos: 100,
          neg: 20
        },
        {
          date: "2023/1/2",
          pos: 121,
          neg: 25
        },
        {
          date: "2023/1/3",
          pos: 136,
          neg: 38
        },
        {
          date: "2023/1/4",
          pos: 154,
          neg: 49
        },
        {
          date: "2023/1/5",
          pos: 199,
          neg: 67
        },
        {
          date: "2023/1/6",
          pos: 230,
          neg: 88
        },
        {
          date: "2023/1/7",
          pos: 241,
          neg: 90
        }
      ];
    }
  }
] as MockMethod[];
