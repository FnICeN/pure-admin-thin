<script setup lang="ts">
// import { useData } from "./dataHook";
import { onMounted, ref } from "vue";
import { getTableData } from "@/api/homegeneral";

const tableDataList = ref([]);
onMounted(async () => {
  const tableData = await getTableData();
  tableDataList.value = tableData;
});

const columns: TableColumnList = [
  {
    prop: "date",
    label: "日期",
    width: 200
  },
  {
    prop: "opinion",
    label: "情感倾向",
    width: 200
  },
  {
    prop: "text",
    label: "舆情内容"
  }
];
</script>

<template>
  <pure-table
    :data="tableDataList"
    :columns="columns"
    height="350"
    stripe
    border
  />
</template>

<style scoped></style>
