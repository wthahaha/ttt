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
  columns: ["名称", "数据"],
});
const chartSettings = ref({
  position: "china",
  mapOrigin: chinaData, // 用户自己的地图数据
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
      color: ["#1f3b73", "#00c3ff"], // 有数据的省份颜色
    },
    outOfRange: {
      color: "#e0e0e0", // 没有数据的省份颜色
      label: { show: false }, // 没有数据的省份不显示标签
    },

  },
  series: [{
    type: 'map',
    data: [
      { name: '吉林省', value: 123 },
      { name: '北京市', value: 1223 },
      { name: '上海市', value: 2123 },
      { name: '浙江省', value: 114123 },
    ],
    markPoint: {
      symbol: 'pin', // 自定义标记图形
      symbolSize: 50, // 标记大小
      label: {
        show: true,  // 显示标签
        formatter: '{b}\n{c}', // 格式为：名称 + 换行符 + 数值
        color: '#000', // 标签文字颜色
        backgroundColor: '#fff', // 标签背景颜色
        borderColor: '#000', // 标签边框颜色
        borderWidth: 1, // 标签边框宽度
        borderRadius: 3, // 标签圆角半径
        padding: [4, 6], // 标签内边距（上右下左）
        shadowColor: 'rgba(0, 0, 0, 0.2)', // 标签阴影颜色
        shadowBlur: 10, // 标签阴影模糊
        shadowOffsetX: 2, // 标签阴影横向偏移
        shadowOffsetY: 2, // 标签阴影纵向偏移
      },
      itemStyle: {
        color: '#f40', // 标记颜色
      },
      data: [
        { name: '吉林省', coord: [125.325990, 43.897016], value: 123 },
        { name: '北京市', coord: [116.407526, 39.90403], value: 1223 },
        { name: '上海市', coord: [121.473701, 31.230416], value: 2123 },
        { name: '浙江省', coord: [120.153576, 30.287459], value: 114123 }
      ]
    }
  }]
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
