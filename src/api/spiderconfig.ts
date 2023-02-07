import { http } from "@/utils/http";

type Res = {
  success: boolean;
};

export const submitConfig = (data: Object) => {
  return http.request<Res>("post", "/submitConf", {
    data
  });
};
export const getRunning = () => {
  return http.request<Res>("get", "/runningOrNot");
};
export const stopSpider = () => {
  return http.request<Res>("get", "/stopSpiderNow");
};
