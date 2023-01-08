<script setup lang="ts">
import { ref } from "vue";
import { ReNormalCountTo } from "@/components/ReCountTo";

const data = ref({
  job: "小镇做题家",
  get: 1000,
  analyse: 900,
  pos: 677,
  neg: 223
});
</script>

<template>
  <el-row type="flex" align="middle">
    <el-col :span="12">
      <p class="text">当前监测任务</p>
    </el-col>
    <el-col :span="12">
      <p class="text">【{{ data.job }}】</p>
    </el-col>
  </el-row>
  <el-row type="flex" align="middle">
    <el-col :span="12">
      <p class="text">已爬取舆情总数</p>
    </el-col>
    <el-col :span="12">
      <ReNormalCountTo
        :duration="1000"
        :color="'#409EFF'"
        :fontSize="'2em'"
        :startVal="1"
        :endVal="data.get"
      />
    </el-col>
  </el-row>
  <el-row type="flex" align="middle">
    <el-col :span="12">
      <p class="text">已分析舆情总数</p>
    </el-col>
    <el-col :span="12">
      <ReNormalCountTo
        :duration="1500"
        :color="'#409EFF'"
        :fontSize="'2em'"
        :startVal="1"
        :endVal="data.analyse"
      />
    </el-col>
  </el-row>
  <el-row type="flex" align="middle">
    <el-col :span="12">
      <p class="text">正向总数</p>
    </el-col>
    <el-col :span="12">
      <ReNormalCountTo
        :duration="2000"
        :color="'#67C23A'"
        :fontSize="'2em'"
        :startVal="1"
        :endVal="data.pos"
      />
    </el-col>
  </el-row>
  <el-row type="flex" align="middle">
    <el-col :span="12">
      <p class="text">负向总数</p>
    </el-col>
    <el-col :span="12">
      <ReNormalCountTo
        :duration="2000"
        :color="'#F56C6C'"
        :fontSize="'2em'"
        :startVal="1"
        :endVal="data.neg"
      />
    </el-col>
  </el-row>
</template>

<style scoped>
.text {
  font-size: 25px;
}

.el-col {
  text-align: center;
}

.el-row {
  margin-bottom: 20px;
}
</style>
