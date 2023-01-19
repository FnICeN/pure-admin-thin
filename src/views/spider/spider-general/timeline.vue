<script setup lang="ts">
import { markRaw, ref, onMounted } from "vue";
import { useRenderFlicker } from "@/components/ReFlicker";
import { getSpiderTimeline } from "@/api/spiderdata";

const activities = ref([]);
onMounted(async () => {
  const result = await getSpiderTimeline();
  result.forEach(item => {
    if (item.nicon) {
      item["icon"] =
        item.nicon === 1
          ? markRaw(useRenderFlicker({ background: "#67C23A" }))
          : markRaw(useRenderFlicker({ background: "#F56C6C" }));
      delete item.nicon;
    }
  });
  activities.value = result;
});
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
