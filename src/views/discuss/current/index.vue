<script setup lang="ts">
import { useColumns } from "./columns";
const {
  loading,
  columns,
  dataList,
  hideVal,
  pagination,
  loadingConfig,
  onCurrentChange
} = useColumns();

const showAll = () => {
  hideVal.value = ["nohide"];
};
</script>

<template>
  <div>
    <el-space class="float-right mb-4">
      <el-button @click="showAll">不隐藏</el-button>
      <el-checkbox-group v-model="hideVal" size="default">
        <el-checkbox-button label="hideId">隐藏id</el-checkbox-button>
        <el-checkbox-button label="hideUsername">隐藏用户名</el-checkbox-button>
        <el-checkbox-button label="hideDate">隐藏日期</el-checkbox-button>
        <el-checkbox-button label="hideText">隐藏正文</el-checkbox-button>
        <el-checkbox-button label="hideTopic">隐藏主题</el-checkbox-button>
        <el-checkbox-button label="hideAttitude">隐藏点赞量</el-checkbox-button>
        <el-checkbox-button label="hideComment">隐藏评论量</el-checkbox-button>
        <el-checkbox-button label="hideRepost">隐藏转发量</el-checkbox-button>
      </el-checkbox-group>
      <el-divider direction="vertical" />
    </el-space>

    <pure-table
      border
      row-key="id"
      alignWhole="center"
      showOverflowTooltip
      size="large"
      :height="800"
      :loading="loading"
      :loading-config="loadingConfig"
      :data="
        dataList.slice(
          (pagination.currentPage - 1) * pagination.pageSize,
          pagination.currentPage * pagination.pageSize
        )
      "
      :columns="columns"
      :pagination="pagination"
      @current-change="onCurrentChange"
    />
  </div>
</template>

<style scoped></style>
