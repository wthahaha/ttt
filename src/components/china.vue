<template>
  <div class="china-chart">
    <tiny-chart-map
      width="100vh"
      height="100vh"
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
    zoom: 1.2,
    show: true,
    roam: false,
    emphasis: {
      label: {
        show: false,
      },
    },
    label: {
      show: false,
    },
    layoutSize: "100%",
    itemStyle: {
      normal: {
        areaColor: "#013c72", // 区域颜色
        borderColor: "#00c3ff", // 边界线颜色
        borderWidth: 1,
        shadowColor: "green",
        shadowOffsetX: 0,
        shadowOffsetY: 5,
        shadowBlur: 1,
      },
    },
    visualMap: {
      min: 0,
      max: 1000,
      left: "left",
      top: "bottom",
      text: ["高", "低"], // 文本，默认为数值文本
      calculable: true,
      inRange: {
        color: ["#1f3b73", "#00c3ff"], // 色带范围
      },
    },
  });
</script>

<style scoped></style>
