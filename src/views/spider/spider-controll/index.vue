<script setup lang="ts">
import Form from "./form.vue";

defineOptions({
  name: "spider-controll"
});
</script>

<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="clearfix text">
          <span>爬虫参数管理</span>
        </div>
      </template>
      <Form />
    </el-card>
  </div>
</template>

<style scoped>
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
  width: 70%;
  margin-left: 15%;
}
</style>
