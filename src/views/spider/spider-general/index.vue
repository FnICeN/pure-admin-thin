<script setup lang="ts">
// import { FontIcon } from "@/components/ReIcon";
import Number from "./data-number.vue";
import TimeLine from "./timeline.vue";
defineOptions({
  name: "Spider-general"
});
</script>

<template>
  <div>
    <!-- <FontIcon icon="icon-shuju" svg style="width: 50px; height: 50px" /> -->
    <el-card class="box-card">
      <template #header>
        <div class="clearfix text">
          <span>爬虫信息总览</span>
        </div>
      </template>
      <el-row :gutter="20" type="flex" align="middle">
        <el-col :span="12">
          <Number />
        </el-col>
        <el-col :span="12">
          <TimeLine />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.text {
  font-size: 20px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 80%;
  margin-left: 10%;
}
</style>
