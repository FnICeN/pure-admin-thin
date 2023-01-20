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
const anotherData = ref([]);
const { isDark } = useDark();

const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "light";
});

const pieChartRef = ref<HTMLDivElement | null>(null);
const { setOptions, resize } = useECharts(pieChartRef as Ref<HTMLDivElement>, {
  theme
});

// const pieData = ref({ pos: 0, neg: 0 });

// console.log(anotherData);
//装填pieData
const pieData = computed(() => {
  return {
    pos: anotherData.value.reduce((pre, cur) => {
      return pre + cur.pos;
    }, 0),
    neg: anotherData.value.reduce((pre, cur) => {
      return pre + cur.neg;
    }, 0)
  };
});

const set = () => {
  setOptions({
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
        name: "情感倾向",
        type: "pie",
        top: "10%",
        radius: "80%",
        center: ["40%", "50%"],
        data: [
          { value: pieData.value.pos, name: "积极" },
          { value: pieData.value.neg, name: "消极" }
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
  <div ref="pieChartRef" style="width: 100%; height: 35vh; margin-left: 5px" />
</template>
