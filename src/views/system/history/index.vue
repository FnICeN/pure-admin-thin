<script setup lang="ts">
import { type PaginationProps } from "@pureadmin/table";
import { reactive, ref, onMounted } from "vue";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { getHistoryData, ChangeTo, delTopicData } from "@/api/history";
import Delete from "@iconify-icons/ep/delete";
import Refresh from "@iconify-icons/ep/refresh";
import { message } from "@/utils/message";

const loading = ref(true);
const dataList = ref([]);
const pagination = reactive<PaginationProps>({
  total: dataList.value.length,
  pageSize: 10,
  currentPage: 1,
  background: true
});
const columns: TableColumnList = [
  {
    label: "话题名称",
    prop: "topic",
    minWidth: 150
  },
  {
    label: "创建日期",
    prop: "ctime",
    minWidth: 100
  },
  {
    label: "操作",
    fixed: "right",
    width: 180,
    slot: "operation"
  }
];

onMounted(async () => {
  dataList.value = await getHistoryData();
  loading.value = false;
});

const refresh = async () => {
  loading.value = true;
  dataList.value = await getHistoryData();
  loading.value = false;
};

const change = async row => {
  loading.value = true;
  const res = await ChangeTo({ to: row.topic });
  loading.value = false;
  if (res) {
    message("更改话题成功！数据已跟随话题改变", { type: "success" });
  } else {
    message("更改话题失败", { type: "error" });
  }
};

const delTopic = async row => {
  await delTopicData({ topic: row.topic });
  refresh();
};
</script>

<template>
  <div class="his">
    <PureTableBar title="历史爬取数据管理" @refresh="refresh">
      <!-- eslint-disable -->
      <template #buttons></template>

      <template v-slot="{ size, checkList }" class="table">
        <pure-table
          border
          align-whole="center"
          table-layout="auto"
          :loading="loading"
          :size="size"
          :data="dataList"
          :columns="columns"
          :checkList="checkList"
          :pagination="pagination"
          :paginationSmall="size === 'small' ? true : false"
          :header-cell-style="{
            background: 'var(--el-table-row-hover-bg-color)',
            color: 'var(--el-text-color-primary)'
          }"
        >
          <template #operation="{ row }">
            <el-button
              class="reset-margin"
              link
              type="primary"
              :size="size"
              :icon="useRenderIcon(Refresh)"
              @click="change(row)"
            >
              切换
            </el-button>
            <el-popconfirm
              title="是否确认删除爬取的此话题所有数据?"
              @confirm="delTopic(row)"
            >
              <template #reference>
                <el-button
                  class="reset-margin"
                  link
                  type="primary"
                  :size="size"
                  :icon="useRenderIcon(Delete)"
                >
                  删除
                </el-button>
              </template>
            </el-popconfirm>
          </template>
        </pure-table>
      </template>
    </PureTableBar>
  </div>
</template>

<style scoped></style>
