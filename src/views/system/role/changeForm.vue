<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  nowRole: {
    type: Object,
    default: () => {
      return {};
    }
  }
});

const submitForm = async () => {
  console.log("submit");
  formVisible.value = false;
};

const formVisible = ref(false);
const role = ref(props.nowRole);

const emit = defineEmits(["update:visible"]);
watch(
  () => props.visible,
  val => {
    formVisible.value = val;
  }
);
//通知外部更新，由于外部是v-model，所以实际上是在更新外部的visible值
watch(
  () => formVisible.value,
  val => {
    emit("update:visible", val);
  }
);
watch(
  () => props.nowRole,
  val => {
    role.value = val;
  }
);
</script>

<template>
  <div>
    <el-dialog v-model="formVisible" title="编辑角色信息" draggable>
      <el-form :model="role">
        <el-form-item label="角色编号：">
          <el-input v-model="role.id" />
        </el-form-item>
        <el-form-item label="角色名称：">
          <el-input v-model="role.name" />
        </el-form-item>
        <el-form-item label="角色标识：">
          <el-input v-model="role.code" />
        </el-form-item>
        <el-form-item label="角色类型：">
          <el-radio-group v-model="role.type">
            <el-radio-button :label="2">自定义</el-radio-button>
            <el-radio-button :label="1">内置</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="状态：">
          <el-switch
            v-model="role.status"
            :active-value="1"
            :inactive-value="0"
            active-text="已开启"
            inactive-text="已关闭"
            inline-prompt
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" @click="submitForm()"> 确定 </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
::v-deep .el-dialog {
  width: 20%;
}

.el-form {
  width: 90%;
  margin-left: 5%;
}
</style>
