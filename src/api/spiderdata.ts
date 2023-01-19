import { http } from "@/utils/http";

export type SpiderDataResult = {
  job: string;
  get: number;
  analyse: number;
  pos: number;
  neg: number;
};
type SpiderTimelineItem = {
  content: string;
  timestamp: string;
  nicon?: number;
  color?: string;
};
export type SpiderTimelineResult = Array<SpiderTimelineItem>;

/** 获取爬虫总资料 */
export const getSpiderData = () => {
  return http.request<SpiderDataResult>("get", "/getspider");
};

export const getSpiderTimeline = () => {
  return http.request<SpiderTimelineResult>("get", "/getTimeline");
};
