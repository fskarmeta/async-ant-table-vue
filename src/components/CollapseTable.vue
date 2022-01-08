<template>
  <a-card :bordered="false">
    <a-spin :spinning="viewLoading">
      <EmptyData v-if="!results" />
      <div v-else>
        <MobileDisplay
          class="mobile-component"
          :data="data"
          :loading.sync="loading"
          :active-keys.sync="activeKeys"
          :current-procedure.sync="currentProcedure"
          @change="collapseExpand"
        />
        <Table
          class="tablet-desktop-component"
          :data="data"
          :loading.sync="loading"
          :active-keys.sync="activeKeys"
          :current-procedure.sync="currentProcedure"
          @expand="tableExpand"
        />
      </div>
    </a-spin>
  </a-card>
</template>

<script>
import mockData from "@/assets/utils/mockData.json";
import EmptyData from "@/components/EmptyData";
import Table from "@/components/Table";
import MobileDisplay from "@/components/MobileDisplay";

export default {
  name: "ResponsiveTableComponent",
  components: {
    Table,
    MobileDisplay,
    EmptyData,
  },
  data() {
    return {
      results: false,
      currentProcedure: {},
      alreadyLoadedProcedures: new Map(),
      viewLoading: false,
      loading: false,
      activeKeys: [],
      data: [],
    };
  },
  beforeMount() {
    this.viewLoading = true;
    setTimeout(() => {
      if (mockData.data && mockData.data.length) {
        this.data = mockData.data.map((item, index) => ({
          number: item.number,
          name: item.name,
          state: item.state,
          key: (index + 1).toString(),
        }));
        this.results = true;
        this.viewLoading = false;
        return;
      }
      this.viewLoading = false;
    }, 1500);
  },
  methods: {
    async tableExpand({ record, expanded }) {
      if (expanded) return (this.activeKeys = []);
      console.log(record);
      const { key, name, number, state } = record;
      if (this.checkIfProcedureIsAlreadyLoaded(key)) return;
      this.fetchProcedure(key, name, number, state);
    },
    async collapseExpand(key) {
      if (!key) return (this.activeKeys = []);
      if (this.checkIfProcedureIsAlreadyLoaded(key)) return;
      const data = this.data.find((item) => item.key === key);
      const { name, number, state } = data;
      this.fetchProcedure(key, name, number, state);
    },
    checkIfProcedureIsAlreadyLoaded(key) {
      if (this.alreadyLoadedProcedures.has(key)) {
        this.currentProcedure = this.alreadyLoadedProcedures.get(key);
        this.activeKeys = [key];
        return true;
      }
      return false;
    },
    async fetchProcedure(key, name, number, state) {
      this.loading = true;
      // Here you can fetch data for each individual row of the table
      try {
        this.$notification["success"]({
          message: "Fetching data with number " + number,
          duration: 2,
        });
        setTimeout(() => {
          this.currentProcedure = {
            key,
            name,
            number,
            state,
          };
          this.alreadyLoadedProcedures.set(key, this.currentProcedure);
          this.activeKeys = [key];
          this.loading = false;
        }, 1000);
      } catch {
        this.resetAndNotify();
      }
    },
    resetAndNotify() {
      this.$notification["error"]({
        message: "There was an error",
        description: "Something went wrong, please try again later",
        duration: 4,
      });
      this.activeKeys = [];
      this.currentProcedure = [];
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-component {
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
}

.tablet-desktop-component {
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
