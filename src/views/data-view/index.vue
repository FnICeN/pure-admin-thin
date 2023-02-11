<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import Pie from "../data-view/pie.vue";
import Line from "../data-view/line.vue";
import Tab from "../data-view/table.vue";
import DateLine from "./dateLine.vue";
import { getTableData, getAnotherData } from "@/api/homegeneral";
defineOptions({
  name: "Data-view"
});

const anotherData = ref([]);
const tableData = ref([]);
onBeforeMount(async () => {
  anotherData.value = await getAnotherData();
  tableData.value = await getTableData();
});
</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card" style="margin-top: 10px; height: 480px">
          <template #header>
            <div class="clearfix">
              <span class="font-semibold text-xl">近期舆情数据</span>
            </div>
          </template>
          <Tab :table-data="tableData" />
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <!-- eslint-disable-next-line -->
            <template #header>
              <div class="clearfix">
                <span class="font-semibold text-xl">舆情综合比例</span>
              </div>
            </template>
            <div class="mb-5">
              <Pie :another-data="anotherData" />
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <!-- eslint-disable-next-line -->
            <template #header>
              <div class="clearfix">
                <span class="font-semibold text-xl">舆情综合走向</span>
              </div>
            </template>
            <div class="mb-5">
              <Line :another-data="anotherData" />
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <!-- eslint-disable-next-line -->
            <template #header>
              <div class="clearfix">
                <span class="font-semibold text-xl">发布日期分布</span>
              </div>
            </template>
            <div class="mb-5">
              <DateLine :another-data="anotherData" />
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  margin-left: 20px;
  margin-right: 20px;
}

/* 表格布局 */
.el-row {
  margin-bottom: 40px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
