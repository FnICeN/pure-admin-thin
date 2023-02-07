import { http } from "@/utils/http";

type LDAResp = string;
type refreshResp = {
  success: boolean;
};

export const getLDAData = () => {
  return http.request<LDAResp>("get", "/getLDA");
};
export const refresh = (data: Object) => {
  return http.request<refreshResp>("post", "/refreshLDA", { data });
};
