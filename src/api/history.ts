import { http } from "@/utils/http";

type HistoryTopic = {
  topic: string;
  ctime: string;
};
type Res = {
  success: boolean;
};

export type HistoryData = Array<HistoryTopic>;

export const getHistoryData = () => {
  return http.request<HistoryData>("get", "/getHistoryData");
};
export const ChangeTo = data => {
  return http.request<Res>("post", "/changeTo", { data });
};
export const delTopicData = data => {
  return http.request<Res>("post", "/delTopicData", { data });
};
