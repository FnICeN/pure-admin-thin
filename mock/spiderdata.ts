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
  }
] as MockMethod[];
