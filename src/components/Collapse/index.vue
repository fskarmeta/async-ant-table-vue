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
  background-color: #fff;
}
</style>
