import { http } from "@/utils/http";

type CurrentDataItem = {
  date: string;
  opinion: string;
  text: string;
};
type AnoItem = {
  date: string;
  pos: number;
  neg: number;
};

export type CurrentData = Array<CurrentDataItem>;
export type AnotherData = Array<AnoItem>;

export const getTableData = () => {
  return http.request<CurrentData>("get", "/getCurrentData");
};
export const getAnotherData = () => {
  return http.request<AnotherData>("get", "/getAnotherData");
};
