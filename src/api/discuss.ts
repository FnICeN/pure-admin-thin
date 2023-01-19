import { http } from "@/utils/http";

type HotItem = {
  content: string;
  href: string;
};
type DiscussItem = {
  id: string;
  username: string;
  date: string;
  text: string;
  topic: string;
  attitude: number;
  comment: number;
  repost: number;
};

export type HotTalkData = Array<HotItem>;
export type HotSearchData = Array<HotItem>;
export type Discuss = Array<DiscussItem>;

export const getTalkData = () => {
  return http.request<HotTalkData>("get", "/getTalk");
};
export const getSearchData = () => {
  return http.request<HotSearchData>("get", "/getSearch");
};
export const getAllDiscuss = () => {
  return http.request<Discuss>("get", "/getAllDiscuss");
};
