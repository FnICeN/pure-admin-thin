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

// const { setOptions, resize, getOption, getInstance } = useECharts(lineChartRef as Ref<HTMLDivElement>, {
//   theme
// });

const data = [
  ["2023/1/1", 100, 20],
  ["2023/1/2", 121, 25],
  ["2023/1/3", 136, 38],
  ["2023/1/4", 154, 49],
  ["2023/1/5", 199, 67]
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
const getNegValueList = () => {
  return data.map(function (item) {
    return item[2];
  });
};

// const add = () => {
//   data.push(["2023/1/6", 288, 67])
//   var option = getOption()
//   option.xAxis = {
//     type: "category",
//     data: getDateList(),
//     axisTick: { alignWithLabel: true }
//   }
//   option.series[0].data = getPosValueList()
//   option.series[1].data = getNegValueList()
//   getInstance().setOption(option, true)
// }

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
      name: "积极",
      data: getPosValueList(),
      type: "line",
      smooth: true
    },
    {
      name: "消极",
      data: getNegValueList(),
      type: "line",
      smooth: true
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
    <!-- <button @click="add">clickme</button> -->
  </div>
</template>

<style scoped></style>
