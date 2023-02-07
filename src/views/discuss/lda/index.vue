<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { getLDAData, refresh } from "@/api/lda";
import { ElMessageBox, ElNotification } from "element-plus";

const shtml = ref("");
const url = ref("");
const req = ref({ option: 0, disc: "" });
const inputVisible = ref(false);

onMounted(async () => {
  shtml.value = await getLDAData();
  const bb = new Blob([shtml.value], { type: "text/html" });
  url.value = URL.createObjectURL(bb);
});

const confirm = () => {
  ElMessageBox.confirm(
    "更新一次LDA分析报告可能会花费较长时间，且会停止舆情信息的爬取，确定要更新吗？",
    "警告",
    {
      type: "warning",
      confirmButtonText: "确认",
      cancelButtonText: "取消"
    }
  ).then(async () => {
    const res = await refresh(req.value);
    ElNotification({
      title: res.success ? "成功" : "失败",
      message: res.success
        ? "更新任务提交成功，开始更新..."
        : "拒绝更新，可能已经开始更新",
      type: res.success ? "success" : "error",
      position: "top-left",
      showClose: false
    });
  });
};

watch(
  () => req.value.option,
  n => {
    if (n == 2 || n == 1) {
      inputVisible.value = true;
      return;
    }
    inputVisible.value = false;
    req.value.disc = "";
  }
);
</script>

<template>
  <div>
    <iframe :src="url" id="foo" class="page" />
    <el-button @click="confirm" type="primary">更新</el-button>
    <el-select v-model="req.option" class="m-2" placeholder="Select">
      <el-option :value="0" label="全部" />
      <el-option :value="1" label="按微博正文" />
      <el-option :value="2" label="按话题" />
    </el-select>
    <div class="input">
      <el-input
        v-model="req.disc"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        :placeholder="req.option === 2 ? `输入话题` : `输入微博正文`"
        :formatter="req.option === 2 ? value => `#${value}#` : null"
        :parser="req.option === 2 ? value => value.replace(/\#\s?/g, '') : null"
        v-show="inputVisible"
      />
    </div>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  height: 860px;
}

.input {
  width: 50%;
}
</style>
