<template>
  <a-spin :spinning="loading" class="collapses-container">
    <Collapse
      accordion
      @change="onChange($event)"
      :active-keys.sync="activeKeys"
    >
      <a-collapse-panel v-for="procedure in data" :key="procedure.key">
        <template #header>
          <div class="collapse-header-container">
            <span class="number-item">Number: {{ procedure.number }}</span>
            <span class="name-item">{{ procedure.name }}</span>
            <span
              class="state-item"
              :style="`color: ${formatColor(procedure.state)}`"
            >
              {{ procedure.state }}</span
            >
          </div>
        </template>
        <FetchedDataComponent
          v-if="
            !loading && activeKeys.length && activeKeys[0] === procedure.key
          "
          :data.sync="currentProcedure"
        />
      </a-collapse-panel>
    </Collapse>
  </a-spin>
</template>

<script>
import colors from "@/assets/utils/procedureStatusColors.js";
import Collapse from "@/components/Collapse";
import FetchedDataComponent from "@/components/FetchedData";

export default {
  name: "MobileDisplayComponent",
  components: {
    Collapse,
    FetchedDataComponent,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    currentProcedure: {
      type: Object,
      default: () => {},
    },
    activeKeys: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatColor(state) {
      return colors[state] || "inherit";
    },
    async onChange(key) {
      this.$emit("change", key);
    },
  },
};
</script>

<style lang="scss" scoped>
.collapses-container {
  span {
    display: block;
    line-height: 1.5;
    text-align: start;
  }

  .number-item,
  .name-item {
    font-weight: 400;
  }

  .state-item {
    font-weight: 600;
  }

  ::v-deep .ant-collapse-header {
    height: auto;
  }

  ::v-deep .ant-collapse-item {
    border-bottom: 8px #fff solid;

    ::v-deep .ant-collapse-header {
      border: none;
    }
  }
}
</style>
