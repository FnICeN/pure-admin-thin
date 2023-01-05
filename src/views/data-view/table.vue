<script setup lang="ts">
const tableData = [
  {
    date: "2016-05-02",
    opinion: "正向",
    text: "舆情内容"
  },
  {
    date: "2016-05-04",
    opinion: "正向",
    text: "舆情内容"
  },
  {
    date: "2016-05-01",
    opinion: "负向",
    text: "舆情内容"
  },
  {
    date: "2016-05-03",
    opinion: "负向",
    text: "舆情内容"
  },
  {
    date: "2016-05-03",
    opinion: "负向",
    text: "舆情内容"
  },
  {
    date: "2016-05-03",
    opinion: "负向",
    text: "舆情内容"
  },
  {
    date: "2016-05-03",
    opinion: "负向",
    text: "舆情内容"
  },
  {
    date: "2016-05-03",
    opinion: "负向",
    text: "舆情内容"
  },
  {
    date: "2016-05-03",
    opinion: "负向",
    text: "舆情内容"
  }
];

const columns: TableColumnList = [
  {
    prop: "date",
    label: "日期"
  },
  {
    prop: "opinion",
    label: "情感倾向"
  },
  {
    prop: "text",
    label: "舆情内容"
  }
];
</script>

<template>
  <pure-table :data="tableData" :columns="columns" height="350" stripe />
</template>

<style scoped></style>
