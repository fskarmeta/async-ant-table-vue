<template>
  <div class="fetched-data-container">
    <p>Your fetched data with</p>
    <p>{{ data.number }}</p>
    <p>{{ data.name }}</p>
    <p>{{ data.state }}</p>
  </div>
</template>

<script>
export default {
  name: "FetchedDataComponent",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.fetched-data-container {
  margin-top: 16px;
  width: 100%;
  text-align: center;
}
</style>
