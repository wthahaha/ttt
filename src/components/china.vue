<template>
  <div class="china-chart">
    <tiny-chart-map class="tiny-map" width="100%" height="100%" :data="chartData"
      :settings="chartSettings"></tiny-chart-map>
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
  zoom: 1.8,
  center: [104.114129, 33.550339], // 设置地图的中心点
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
  itemStyle: {
    normal: {
      areaColor: "#0059B3", // 区域颜色
      borderColor: "#00c3ff", // 边界线颜色
      borderWidth: 0.3,
      // shadowColor: "green", // 边界投影颜色
      // shadowOffsetX: 0,  // 边界投影设置
      // shadowOffsetY: 5,
      // shadowBlur: 1,
    },
  },
  visualMap: {
    // 控制地图区域随数据大小变化的颜色
    min: 0,
    max: 1000000,
    left: "left",
    top: "bottom",
    text: ["高", "低"], // 文本，默认为数值文本
    calculable: true,
    inRange: {
      color: ["#1f3b73", "#00c3ff"], // 色带范围
    },
  }
});
</script>

<style scoped>
.china-chart {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.tiny-map {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
