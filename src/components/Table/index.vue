<template>
  <a-spin :spinning="loading">
    <a-table
      :columns="columns"
      :data-source="data"
      :expandIconColumnIndex="3"
      :expandIconAsCell="false"
      :expandedRowKeys="activeKeys"
      :pagination="false"
    >
      <template slot="expandIcon" slot-scope="props">
        <div @click="expand(props)" class="expand-item">
          <span>{{ props.expanded ? "Show less" : "Show more" }}</span>
          <a-icon class="arrow-icon" :type="props.expanded ? 'up' : 'down'" />
        </div>
      </template>
      <template slot="name" slot-scope="name">{{ name }} </template>
      <template slot="state" slot-scope="state">
        <a-badge :color="state | formatBadgeColor" :text="state" />
      </template>
      <template
        slot="expandedRowRender"
        slot-scope="record"
      >
        <FetchedDataComponent
          v-if="!loading && activeKeys.length && activeKeys[0] === record.key"
          :data.sync="currentProcedure"
        />
      </template>
    </a-table>
  </a-spin>
</template>
<script>
import colors from "@/assets/utils/procedureStatusColors.js";
import FetchedDataComponent from "@/components/FetchedData";

export default {
  name: "TableComponent",
  components: {
    FetchedDataComponent,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    currentProcedure: {
      type: Object,
      default: () => {},
    },
    loading: {
      type: Boolean,
      default: false,
    },
    activeKeys: {
      type: Array,
      default: () => [],
    },
  },
  filters: {
    formatBadgeColor(val) {
      if (val) return colors[val];
      return "black";
    },
  },
  data() {
    return {
      columns: [
        {
          title: "Number",
          dataIndex: "number",
          key: "number",
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          scopedSlots: { customRender: "name" },
        },
        {
          title: "Status",
          dataIndex: "state",
          key: "state",
          scopedSlots: { customRender: "state" },
        },
        {
          title: "Detail",
          key: "detail",
        },
      ],
    };
  },
  methods: {
    async expand(props) {
      this.$emit("expand", props);
    },
  },
};
</script>

<style lang="scss" scoped>
.expand-item {
  cursor: pointer;

  .arrow-icon {
    margin-left: 8px;
  }
}
</style>
