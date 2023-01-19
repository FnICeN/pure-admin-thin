import { ref } from "vue";
import { getTableData, getAnotherData } from "@/api/homegeneral";
export function useData() {
  const tableDataList = ref([]);
  const pieData = ref({ pos: 0, neg: 0 });
  const lineData = ref([]);
  const dateLineData = ref([]);
  const dateList = ref([]);
  const eachdaylist = ref([]);
  const getData = async () => {
    console.log("即将获取数据");
    tableDataList.value = await getTableData();
    const anotherData = await getAnotherData();
    console.log("数据获取完成");
    console.log("即将装填");
    //装填pieData
    pieData.value.pos = anotherData.reduce((pre, cur) => {
      return pre + cur.pos;
    }, 0);
    pieData.value.neg = anotherData.reduce((pre, cur) => {
      return pre + cur.neg;
    }, 0);

    //装填lineData
    anotherData.forEach(cur => {
      lineData.value.push([cur.date, cur.pos, cur.neg]);
    });

    //装填dateLineData
    anotherData.forEach((cur, index) => {
      if (index) {
        const yesterday =
          anotherData[index - 1].neg + anotherData[index - 1].pos;
        // dateLineData.value.push([cur.date, cur.pos + cur.neg - yesterday]);
        dateList.value.push(cur.date);
        eachdaylist.value.push(cur.pos + cur.neg - yesterday);
      }
    });
    console.log("装填完成");
  };
  getData();

  return {
    tableDataList,
    pieData,
    lineData,
    dateLineData,
    dateList,
    eachdaylist,
    getData
  };
}
