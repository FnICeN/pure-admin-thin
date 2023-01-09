<script setup lang="ts">
import { ref } from "vue";
import { provinceAndCityData, CodeToText } from "element-china-area-data";
import { subBefore } from "@pureadmin/utils";
import { formatDate } from "@vueuse/core";

const activeName = "";

const spiderSets = ref({
  keywords: [{ value: "", key: Date.now() }],
  weiboType: 0,
  contentType: 0,
  regions: [],
  date_start: "",
  date_end: "",
  threshold: 40,
  delay: 2,
  desc: "",
  higherSets: {
    CONCURRENT_REQUESTS: 40,
    REACTOR_THREADPOOL_MAXSIZE: 500
  }
});

const tempregions = ref([[""]]);
const tempdate = ref("");

//进行省市区名的转换，存入regions中
const toRegions = () => {
  tempregions.value.forEach(region => {
    if (region[0] == "") {
      console.log("all");
      spiderSets.value.regions.push("全部");
      return;
    }
    //清除第一个空字符串，此时存在选中的省市区
    region.unshift();
    let city: string;
    if (CodeToText[region[1]] == "市辖区") {
      console.log("选了市辖区");
      city = CodeToText[region[0]];
    } else {
      console.log("非市辖区");
      city = CodeToText[region[1]];
    }
    spiderSets.value.regions.push(subBefore(city, "市"));
  });
};

//将临时存储的Date对象数组转成字符串并赋值给表单数据
const dateChange = val => {
  spiderSets.value.date_start = formatDate(val[0], "YYYY-MM-DD");
  spiderSets.value.date_end = formatDate(val[1], "YYYY-MM-DD");
};

//向响应式keywords中添加一个对象，key为当前时间
const addKeyword = () => {
  spiderSets.value.keywords.push({ value: "", key: Date.now() });
};

//删除keywords中的某个对象
const removeKeyword = keyword => {
  const index = spiderSets.value.keywords.indexOf(keyword);
  if (index !== -1) {
    spiderSets.value.keywords.splice(index, 1);
  }
};

//提交表单时执行
const onSubmit = () => {
  toRegions();

  console.log(JSON.stringify(spiderSets.value));

  //regions复位
  spiderSets.value.regions = [];
  tempregions.value = [[""]];
};

//点击取消，复位所有控件
const onCancel = () => {
  spiderSets.value = {
    keywords: [{ value: "", key: Date.now() }],
    weiboType: 0,
    contentType: 0,
    regions: [],
    date_start: "",
    date_end: "",
    threshold: 40,
    delay: 2,
    desc: "",
    higherSets: {
      CONCURRENT_REQUESTS: 40,
      REACTOR_THREADPOOL_MAXSIZE: 500
    }
  };
  //regions复位
  spiderSets.value.regions = [];
  tempregions.value = [[""]];
};
</script>

<template>
  <el-form
    ref="form"
    :model="spiderSets"
    label-width="150px"
    style="margin-right: 200px"
  >
    <el-form-item
      v-for="(keyword, index) in spiderSets.keywords"
      :label="'关键词' + index"
      :key="keyword.key"
      :prop="'keywords.' + index + '.value'"
      :rules="{
        required: true,
        message: '关键词不能为空',
        trigger: 'blur'
      }"
    >
      <el-col :span="6">
        <el-input v-model="keyword.value" style="width: 90%" />
      </el-col>
      <el-col :span="2">
        <el-button @click.prevent="removeKeyword(keyword)">删除</el-button>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button @click="addKeyword">新增关键词</el-button>
    </el-form-item>
    <el-form-item label="搜索微博类型">
      <el-radio-group v-model="spiderSets.weiboType">
        <el-radio-button label="0">全部</el-radio-button>
        <el-radio-button label="1">原创</el-radio-button>
        <el-radio-button label="2">热门</el-radio-button>
        <el-radio-button label="3">关注人</el-radio-button>
        <el-radio-button label="4">认证用户</el-radio-button>
        <el-radio-button label="5">媒体</el-radio-button>
        <el-radio-button label="6">观点</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="内容筛选">
      <el-radio-group v-model="spiderSets.contentType">
        <el-radio-button label="0">全部</el-radio-button>
        <el-radio-button label="1">图片</el-radio-button>
        <el-radio-button label="2">视频</el-radio-button>
        <el-radio-button label="3">音乐</el-radio-button>
        <el-radio-button label="4">短链接</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="地区筛选">
      <el-cascader
        size="large"
        :options="provinceAndCityData"
        :props="{ multiple: true }"
        v-model="tempregions"
        placeholder="全部"
        clearable
      />
    </el-form-item>
    <el-form-item label="博文时限" style="width: 55%">
      <el-date-picker
        v-model="tempdate"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="dateChange"
      />
    </el-form-item>
    <el-form-item label="搜索阈值">
      <el-tooltip
        content="数值越大速度越快，也越有可能漏掉微博；数值越小速度越慢，获取的微博就越多"
        placement="right"
      >
        <el-input-number
          v-model="spiderSets.threshold"
          :min="1"
          :max="100"
          label="阈值"
        />
      </el-tooltip>
    </el-form-item>
    <el-form-item label="爬取间隔（秒）">
      <el-input-number
        v-model="spiderSets.delay"
        :min="0"
        :max="10"
        label="间隔"
      />
    </el-form-item>
    <el-form-item label="爬取备注">
      <el-input type="textarea" v-model="spiderSets.desc" />
    </el-form-item>

    <el-collapse v-model="activeName">
      <el-collapse-item name="1" title="高级设置">
        <el-form
          :model="spiderSets"
          label-width="150px"
          style="margin-right: 200px"
        >
          <el-form-item label="同时发送请求数">
            <el-input-number
              v-model="spiderSets.higherSets.CONCURRENT_REQUESTS"
              :min="1"
              :max="60"
              label="阈值"
            />
          </el-form-item>
          <el-form-item label="线程池线程数">
            <el-input-number
              v-model="spiderSets.higherSets.REACTOR_THREADPOOL_MAXSIZE"
              :min="300"
              :max="600"
              :step="10"
              label="阈值"
            />
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">开始任务</el-button>
      <el-button @click="onCancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.el-collapse {
  --el-collapse-border-color: none;
  --el-collapse-header-font-size: 20px;
  --el-collapse-header-text-color: #409eff;
  margin-bottom: 20px;
}

::v-deep .el-collapse-item__content {
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>
