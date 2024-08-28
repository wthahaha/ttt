<template>
  <div class="china-chart">
    <tiny-chart-map
      style="width: 1000px"
      :data="chartData"
      :settings="chartSettings"
    ></tiny-chart-map>
  </div>
</template>

<script setup lang="jsx">
  import { ref, getCurrentInstance } from "vue";
  import { ChartMap as TinyChartMap } from "@opentiny/vue";
  import chinaData from "../assets/china.json";

  const chartData = ref({
    columns: ["位置", "GDP"],
    rows: [
      { 位置: "吉林省", GDP: 123 },
      { 位置: "北京市", GDP: 1223 },
      { 位置: "上海省", GDP: 2123 },
      { 位置: "浙江省", GDP: 4123 },
    ],
  });
  const chartSettings = ref({
    position: "china",
    mapOrigin: chinaData, // 用户自己的地图数据
    dataType: {
      GDP: "KMB",
    },
  });
</script>

<style scoped></style>
