import { getTalkData, getSearchData } from "@/api/discuss";

const talkData = await getTalkData();
const searchData = await getSearchData();

const tableData = talkData.map((obj, index) => {
  return {
    talkHot: obj.content,
    searchHot: searchData[index].content,
    talkHref: obj.href,
    searchHref: searchData[index].href
  };
});

export { tableData };
