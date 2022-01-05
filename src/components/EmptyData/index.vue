<template>
  <a-result class="no-results-box" status="warning" title="No results found">
    <template #icon>
      <a-icon type="close-circle" theme="filled" />
    </template>
    <template #extra>
      <a-button>Back</a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: "EmptyDataComponent",
};
</script>

<style lang="scss" scoped>
.no-results-box {
  margin: 64px 0;
}
</style>
