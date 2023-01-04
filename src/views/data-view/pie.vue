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

const pieChartRef = ref<HTMLDivElement | null>(null);
const { setOptions, resize } = useECharts(pieChartRef as Ref<HTMLDivElement>, {
  theme
});

setOptions(
  {
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "vertical",
      // @ts-expect-error
      right: true
    },
    series: [
      {
        name: "信息",
        type: "pie",
        top: "20%",
        radius: "80%",
        center: ["40%", "50%"],
        data: [
          { value: 20000, name: "apple" },
          { value: 66666, name: "banana" },
          { value: 10000, name: "grape" },
          { value: 1000, name: "orange" }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  }
  // {
  //   name: "click",
  //   callback: params => {
  //     console.log("click", params);
  //   }
  // },
  // // 点击空白处
  // {
  //   type: "zrender",
  //   name: "click",
  //   callback: params => {
  //     console.log("点击空白处", params);
  //   }
  // }
);

watch(
  () => useAppStoreHook().getSidebarStatus,
  () => {
    delay(360).then(() => resize());
  }
);
</script>

<template>
  <div ref="pieChartRef" style="width: 100%; height: 35vh" />
</template>
