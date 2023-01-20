<script setup lang="ts">
import { ref, computed, watch, type Ref } from "vue";
import { useAppStoreHook } from "@/store/modules/app";
import {
  delay,
  useDark,
  useECharts,
  type EchartOptions
} from "@pureadmin/utils";

const props = defineProps({
  anotherData: {
    type: Array<any>,
    default: null
  }
});

const { isDark } = useDark();

const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "light";
});

const lineChartRef = ref<HTMLDivElement | null>(null);
const { setOptions, resize } = useECharts(lineChartRef as Ref<HTMLDivElement>, {
  theme
});

const anotherData = ref([]);
const dateList = computed(() => {
  return anotherData.value
    .map((cur, index) => {
      if (index) return cur.date;
    })
    .slice(1);
});
const eachdaylist = computed(() => {
  return anotherData.value
    .map((cur, index) => {
      if (index) {
        const yesterday =
          anotherData.value[index - 1].neg + anotherData.value[index - 1].pos;
        return cur.pos + cur.neg - yesterday;
      }
    })
    .slice(1);
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
        data: eachdaylist.value,
        type: "line",
        areaStyle: {},
        symbol: "none"
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
