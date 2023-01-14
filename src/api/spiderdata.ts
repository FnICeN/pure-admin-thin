import { http } from "@/utils/http";

export type SpiderDataResult = {
  job: string;
  get: number;
  analyse: number;
  pos: number;
  neg: number;
};

/** 获取爬虫总资料 */
export const getSpiderData = () => {
  return http.request<SpiderDataResult>("get", "/getspider");
};
