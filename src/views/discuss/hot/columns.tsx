import { tableData } from "./currentData";
import { ref, onMounted } from "vue";
export function useColumns() {
  const dataList = ref([]);
  const columns: TableColumnList = [
    {
      label: "话题榜热点",
      prop: "talkHot",
      cellRenderer: ({ row }) => (
        <el-link underline={false} href={row.talkHref}>
          {row.talkHot}
        </el-link>
      )
      // slot: "content"
    },
    {
      label: "热搜榜热点",
      prop: "searchHot",
      cellRenderer: ({ row }) => (
        <el-link underline={false} href={row.searchHref}>
          {row.searchHot}
        </el-link>
      )
    }
  ];

  onMounted(() => {
    dataList.value = tableData;
  });

  return {
    dataList,
    columns
  };
}
