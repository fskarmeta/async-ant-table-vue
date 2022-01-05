<template>
  <a-collapse
    :bordered="false"
    expand-icon-position="right"
    :class="collapseType"
    :accordion="accordion"
    :default-active-key="defaultTab"
    :active-key="activeKeys"
    @change="onChange"
  >
    <slot />
  </a-collapse>
</template>

<script>
export default {
  name: "Collapse",
  props: {
    collapseType: {
      type: String,
      default: "",
    },
    accordion: {
      type: Boolean,
      default: false,
    },
    defaultTab: {
      type: String,
      default: null,
    },
    activeKeys: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onChange(event) {
      this.$emit("change", event);
    },
  },
};
</script>

<style lang="scss" scoped>
.ant-collapse-borderless {
  background-color: #f5f5f5;
}

::v-deep .ant-collapse-content-box {
  border-radius: 2px;
  background-color: #fff;
}

::v-deep .ant-collapse-item > .ant-collapse-header .anticon {
  transform: translateY(-50%) rotate(90deg);
  transition: transform 0.5s ease-in-out;
  color: #4d4d4d;
  font-size: 16px;
}

::v-deep .ant-collapse-item-active > .ant-collapse-header .anticon {
  transform: translateY(-50%) rotate(180deg);
  transition: transform 0.5s ease-in-out;
}

::v-deep .ant-collapse-header {
  display: flex;
  align-items: center;
  height: 52px;
  border-bottom: 1px solid #d9d9d9;
  padding-block: 24px;
  padding-inline: 24px;
  font-size: 16px;
  font-weight: 600;
}

::v-deep .ant-collapse-item {
  border-bottom: 0;
}
</style>
