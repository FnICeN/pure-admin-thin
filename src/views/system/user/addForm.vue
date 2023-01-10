<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});

const closeDialog = () => {
  formVisible.value = false;
  // resetForm(ruleFormRef.value);
};

const submitForm = async () => {
  console.log("submit");
  const temp = user.value;
  emit("newUserData", temp);
  //重置信息
  user.value = {
    username: "",
    nickname: "",
    remark: "管理员",
    deptId: 103,
    postIds: [1],
    mobile: "",
    sex: 0,
    id: null,
    status: 0
  };
  formVisible.value = false;
};

const formVisible = ref(false);
const user = ref({
  username: "",
  nickname: "",
  remark: "管理员",
  deptId: 103,
  postIds: [1],
  mobile: "",
  sex: 0,
  id: null,
  status: 0
});

const emit = defineEmits(["update:visible", "newUserData"]);
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
</script>

<template>
  <div>
    <el-dialog v-model="formVisible" title="信息编辑" draggable>
      <el-form :model="user">
        <el-form-item label="用户编号">
          <el-input v-model="user.id" />
        </el-form-item>
        <el-form-item label="用户名称">
          <el-input v-model="user.username" />
        </el-form-item>
        <el-form-item label="用户昵称">
          <el-input v-model="user.nickname" />
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="user.sex">
            <el-radio-button :label="0">男</el-radio-button>
            <el-radio-button :label="1">女</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机号码：">
          <el-input v-model="user.mobile" />
        </el-form-item>
        <el-form-item label="状态：">
          <el-switch
            v-model="user.status"
            :active-value="1"
            :inactive-value="0"
            active-text="已开启"
            inactive-text="已关闭"
            inline-prompt
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="submitForm()"> 确定 </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped></style>
