<script setup lang="ts">
import { ref, computed, watch, type Ref } from "vue";
import { useAppStoreHook } from "@/store/modules/app";
import {
  delay,
  useDark,
  useECharts,
  type EchartOptions
} from "@pureadmin/utils";

const { isDark } = useDark();

const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "light";
});

const lineChartRef = ref<HTMLDivElement | null>(null);
const { setOptions, resize } = useECharts(lineChartRef as Ref<HTMLDivElement>, {
  theme
});

const data = [
  ["2023/1/1", 500],
  ["2023/1/2", 200],
  ["2023/1/3", 136],
  ["2023/1/4", 154],
  ["2023/1/5", 95],
  ["2023/1/6", 33],
  ["2023/1/7", 1]
];

const getDateList = () => {
  return data.map(function (item) {
    return item[0];
  });
};
const getPosValueList = () => {
  return data.map(function (item) {
    return item[1];
  });
};

setOptions({
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "line" }
  },
  legend: {},
  xAxis: {
    type: "category",
    data: getDateList(),
    axisTick: { alignWithLabel: true }
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: getPosValueList(),
      type: "line",
      areaStyle: {},
      symbol: "none"
    }
  ]
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
