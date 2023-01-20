<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  tableData: {
    type: Array<any>,
    default: null
  }
});

const tableDataList = ref([]);

watch(
  () => props.tableData,
  val => {
    tableDataList.value = val;
  }
);

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
