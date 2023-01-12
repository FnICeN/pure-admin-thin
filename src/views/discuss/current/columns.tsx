import { ref, onMounted, reactive } from "vue";
import type { PaginationProps, LoadingConfig } from "@pureadmin/table";
import { delay } from "@pureadmin/utils";
import { tableData } from "./currentData";
export function useColumns() {
  const dataList = ref([]);
  const loading = ref(true);
  const hideVal = ref(["nohide"]);
  const tableSize = ref("default");
  const paginationSmall = ref(false);
  const paginationAlign = ref("right");
  const columns: TableColumnList = [
    {
      label: "博文id",
      prop: "id",
      hide: () => (hideVal.value.indexOf("hideId") !== -1 ? true : false),
      minWidth: 100
    },
    {
      label: "用户名",
      prop: "username",
      hide: () => (hideVal.value.indexOf("hideUsername") !== -1 ? true : false),
      minWidth: 150
    },
    {
      label: "日期",
      prop: "date",
      hide: () => (hideVal.value.indexOf("hideDate") !== -1 ? true : false),
      minWidth: 200
    },
    {
      label: "正文",
      prop: "text",
      hide: () => (hideVal.value.indexOf("hideText") !== -1 ? true : false),
      minWidth: 700
    },
    {
      label: "主题",
      prop: "topic",
      hide: () => (hideVal.value.indexOf("hideTopic") !== -1 ? true : false),
      minWidth: 400
    },
    {
      label: "点赞量",
      prop: "attitude",
      hide: () => (hideVal.value.indexOf("hideAttitude") !== -1 ? true : false),
      minWidth: 100
    },
    {
      label: "评论量",
      prop: "comment",
      hide: () => (hideVal.value.indexOf("hideComment") !== -1 ? true : false),
      minWidth: 100
    },
    {
      label: "转发量",
      prop: "repost",
      hide: () => (hideVal.value.indexOf("hideRepost") !== -1 ? true : false),
      minWidth: 100
    }
  ];

  /** 分页配置 */
  const pagination = reactive<PaginationProps>({
    pageSize: 15,
    currentPage: 1,
    pageSizes: [10, 15, 20],
    total: 0,
    align: "center",
    background: true,
    small: false
  });

  /** 加载动画配置 */
  const loadingConfig = reactive<LoadingConfig>({
    text: "正在加载第一页...",
    viewBox: "-10, -10, 50, 50",
    spinner: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
    // svg: "",
    // background: rgba()
  });

  function onCurrentChange(val) {
    loadingConfig.text = `正在加载第${val}页...`;
    loading.value = true;
    delay(600).then(() => {
      loading.value = false;
    });
  }

  onMounted(() => {
    delay(600).then(() => {
      dataList.value = tableData;
      pagination.total = dataList.value.length;
      loading.value = false;
    });
  });

  return {
    loading,
    columns,
    dataList,
    hideVal,
    tableSize,
    pagination,
    loadingConfig,
    paginationAlign,
    paginationSmall,
    onCurrentChange
  };
}
