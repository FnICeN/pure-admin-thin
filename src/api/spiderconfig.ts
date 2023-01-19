import { http } from "@/utils/http";

export type SubmitSpiderConfigResult = {
  success: boolean;
};
export const submitConfig = (data: Object) => {
  return http.request<SubmitSpiderConfigResult>("post", "/submitConf", {
    data
  });
};
