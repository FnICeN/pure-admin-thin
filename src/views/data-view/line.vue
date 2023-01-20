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

const anotherData = ref([]);

const props = defineProps({
  anotherData: {
    type: Array<any>,
    default: null
  }
});

const dateList = computed(() => {
  return anotherData.value.map(item => {
    return item.date;
  });
});
const posList = computed(() => {
  return anotherData.value.map(item => {
    return item.pos;
  });
});
const negList = computed(() => {
  return anotherData.value.map(item => {
    return item.neg;
  });
});

const set = () => {
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
        name: "积极",
        data: posList.value,
        type: "line",
        smooth: true
      },
      {
        name: "消极",
        data: negList.value,
        type: "line",
        smooth: true
      }
    ]
  });
};

watch(
  () => useAppStoreHook().getSidebarStatus,
  () => {
    delay(360).then(() => resize());
  }
);

watch(
  () => props.anotherData,
  val => {
    anotherData.value = val;
    set();
  }
);
</script>

<template>
  <div>
    <div ref="lineChartRef" style="width: 100%; height: 35vh" />
  </div>
</template>

<style scoped></style>
