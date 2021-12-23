<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="m-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          @click="clickItem(item)"
        >
          <div class="text">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="icon">
            {{ item }}
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import { ref, watch } from "vue";
import { toLine } from "../../../utils";
import * as ElIcons from "@element-plus/icons";
import { useCopy } from "../../../hooks/useCopy";

let propsChooseIcon = defineProps<{
  // 弹窗标题
  title: string;
  // 控制弹窗显示隐藏
  visible: boolean;
}>();

let emitsChooseIcon = defineEmits(["update:visible"]);

// 拷贝props中的visible属性传递给组件库
let dialogVisible = ref<boolean>(propsChooseIcon.visible);

// 点击按钮显示隐藏dialog
let handleClick = () => {
  emitsChooseIcon("update:visible", !propsChooseIcon.visible);
};

// 点击复制
let clickItem = (item: string) => {
  let text = `<el-icon-${toLine(item)} />`;
  useCopy(text);
  dialogVisible.value = false;
};

watch(
  () => dialogVisible.value,
  (value) => {
    emitsChooseIcon("update:visible", value);
  }
);

watch(
  () => propsChooseIcon.visible,
  (value) => {
    dialogVisible.value = value;
  }
);
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
}

svg {
  width: 2em;
  height: 2em;
}

.text {
  font-size: 14px;
}
.icon {
  flex: 1;
}
</style>