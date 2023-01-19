<script setup lang="ts">
import { ref, computed, watch, onMounted, type Ref } from "vue";
import { useAppStoreHook } from "@/store/modules/app";
// import { useData } from "./dataHook";
import { getAnotherData } from "@/api/homegeneral";
import {
  delay,
  useDark,
  useECharts,
  type EchartOptions
} from "@pureadmin/utils";

const dateList = ref([]);
const eachdaylist = ref([]);

const { isDark } = useDark();

const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "light";
});

const lineChartRef = ref<HTMLDivElement | null>(null);
const { setOptions, resize } = useECharts(lineChartRef as Ref<HTMLDivElement>, {
  theme
});

onMounted(async () => {
  const anotherData = await getAnotherData();
  //装填dateLineData
  anotherData.forEach((cur, index) => {
    if (index) {
      const yesterday = anotherData[index - 1].neg + anotherData[index - 1].pos;
      dateList.value.push(cur.date);
      eachdaylist.value.push(cur.pos + cur.neg - yesterday);
    }
  });
  console.log("即将进行setOptions");
  setOptions({
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "line" }
    },
    legend: {},
    xAxis: {
      type: "category",
      data: dateList.value,
      axisTick: { alignWithLabel: true }
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: eachdaylist.value,
        type: "line",
        areaStyle: {},
        symbol: "none"
      }
    ]
  });
  console.log("setOptions完成");
});

watch(
  () => useAppStoreHook().getSidebarStatus,
  () => {
    delay(360).then(() => resize());
  }
);
</script>

<template>
  <div>
    <div ref="lineChartRef" style="width: 100%; height: 35vh" />
  </div>
</template>

<style scoped></style>
