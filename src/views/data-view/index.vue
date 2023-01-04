<script setup lang="ts">
import Pie from "../data-view/pie.vue";
import Line from "../data-view/line.vue";
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <!-- eslint-disable-next-line -->
          <template v-slot="header">
            <div class="clearfix text">
              <span>舆情综合比例</span>
            </div>
            <div class="item">
              <Pie />
            </div>
          </template>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <!-- eslint-disable-next-line -->
          <template v-slot="header">
            <div class="clearfix text">
              <span>舆情综合走向</span>
            </div>
            <div class="item">
              <Line />
            </div>
          </template>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<style>
.text {
  font-size: 20px;
  padding-bottom: 20px;
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
  width: 480px;
  margin-left: 20px;
}

/* 表格布局 */
.el-row {
  margin-bottom: 20px;
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
