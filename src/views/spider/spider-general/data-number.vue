<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ReNormalCountTo } from "@/components/ReCountTo";
import { getSpiderData } from "@/api/spiderdata";

const data = ref({
  job: "",
  get: 0,
  analyse: 0,
  pos: 0,
  neg: 0
});

onMounted(async () => {
  const result = await getSpiderData();
  data.value = result;
});
</script>

<template>
  <el-row type="flex" align="middle">
    <el-col :span="12">
      <p class="text-2xl">当前监测任务</p>
    </el-col>
    <el-col :span="12">
      <p class="text-2xl">【{{ data.job }}】</p>
    </el-col>
  </el-row>
  <el-row type="flex" align="middle">
    <el-col :span="12">
      <p class="text-2xl">已爬取舆情总数</p>
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
      <p class="text-2xl">已分析舆情总数</p>
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
      <p class="text-2xl">正向总数</p>
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
      <p class="text-2xl">负向总数</p>
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
.el-col {
  text-align: center;
}

.el-row {
  margin-bottom: 20px;
}
</style>
