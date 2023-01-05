<!-- <script setup lang="ts">
import { ref } from "vue";
import { default as vElTableInfiniteScroll } from "el-table-infinite-scroll";

defineOptions({
  name: "InfiniteScroll"
});

const amountOfData = new Array(100).fill({
  date: "2022-08-24",
  name: "RealityBoy",
  age: "18"
});

// const dataTemplate = new Array(10).fill({
//   date: "2022-08-24",
//   name: "RealityBoy",
//   age: "18"
// });

const data = ref([]);
const disabled = ref(false);
const page = ref(0);
// const total = ref(10);

const total = ref(Math.floor(amountOfData.length/10))

const load = () => {
  if (disabled.value) return;

  page.value++;
  if (page.value <= total.value) {
    let arr = 
    data.value = data.value.concat(dataTemplate);
  }

  if (page.value === total.value) {
    disabled.value = true;
  }
};
</script>

<template>
  <div>
    <p class="mb-2">
      <span>loaded page(total: {{ total }}): {{ page }}, </span>
      disabled:
      <el-switch v-model="disabled" :disabled="page >= total" />
    </p>
    <el-table
      v-el-table-infinite-scroll="load"
      :data="data"
      :infinite-scroll-disabled="disabled"
      height="250px"
    >
      <el-table-column type="index" />
      <el-table-column prop="date" label="日期" />
      <el-table-column prop="text" label="内容" />
      <el-table-column prop="opinon" label="倾向" />
    </el-table>
  </div>
</template> -->
