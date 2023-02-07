<script setup lang="ts">
import Form from "./form.vue";
import { ref, onMounted } from "vue";
import Refresh from "@iconify-icons/ep/remove-filled";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { getRunning, stopSpider } from "@/api/spiderconfig";
import { message } from "@/utils/message";

defineOptions({
  name: "spider-controll"
});

const isRunning = ref(false);
const fullscreenLoading = ref(false);

onMounted(async () => {
  const isrun = await getRunning();
  isRunning.value = isrun.success;
});

const stop = async () => {
  fullscreenLoading.value = true;
  const stopFlag = await stopSpider();
  fullscreenLoading.value = false;
  if (stopFlag.success) {
    message("停止爬虫成功", { type: "success" });
    isRunning.value = false;
  } else {
    message("停止爬虫失败", { type: "error" });
  }
};

const freshRun = obj => {
  isRunning.value = obj.success;
};
</script>

<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="clearfix text">
          <span>爬虫参数管理</span>
          <el-button
            v-loading.fullscreen.lock="fullscreenLoading"
            class="button"
            type="danger"
            :icon="useRenderIcon(Refresh)"
            v-show="isRunning"
            @click="stop"
            plain
            >停止爬虫</el-button
          >
        </div>
      </template>
      <Form @fresh-run="freshRun" />
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

.button {
  float: right;
  margin-right: 5%;
}
</style>
