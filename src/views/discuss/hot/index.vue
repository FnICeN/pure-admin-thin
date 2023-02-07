<script setup lang="ts">
import dayjs from "dayjs";
import { useColumns } from "./columns";
import Refresh from "@iconify-icons/ep/refresh";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
const date = dayjs(new Date()).format("YYYY-MM-DD");
const { dataList, columns } = useColumns();
</script>

<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div>
          <span class="text">当前日期：{{ date }}</span>
          <el-button
            type="primary"
            class="button"
            text
            :icon="useRenderIcon(Refresh)"
            >刷新</el-button
          >
        </div>
      </template>
      <pure-table :data="dataList" :columns="columns" :border="true" />
    </el-card>
  </div>
</template>

<style scoped>
.text {
  font-size: 20px;
}

.box-card {
  width: 80%;
  margin-left: 10%;
}

.button {
  float: right;
  margin-right: 5%;
}

::v-deep th.el-table__cell {
  text-align: center;
  font-size: 15px;
}
</style>
