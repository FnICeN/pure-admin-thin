<script setup lang="ts">
import { markRaw } from "vue";
import { useRenderFlicker } from "@/components/ReFlicker";

const activities = [
  {
    content: "【新冠疫苗】任务开始执行",
    timestamp: "4天前",
    icon: markRaw(useRenderFlicker({ background: "#67C23A" }))
  },
  {
    content: "【新冠疫苗】任务正常结束",
    timestamp: "3天前",
    color: "#409EFF"
  },
  {
    content: "【美团外卖】任务开始执行",
    timestamp: "昨天",
    icon: markRaw(useRenderFlicker({ background: "#67C23A" }))
  },
  {
    content: "【阿凡达】任务出错",
    timestamp: "2小时前",
    icon: markRaw(useRenderFlicker({ background: "#F56C6C" }))
  },
  {
    content: "【美团外卖】任务正常结束",
    timestamp: "50分钟前",
    color: "#409EFF"
  },
  {
    content: "【小镇做题家】任务继续执行",
    timestamp: "30秒前"
  }
];
</script>

<template>
  <div type="flex">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :color="activity.color"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped></style>
