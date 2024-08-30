<template>
  <v-chart ref="map" :option="option" autoresize />
</template>

<script setup>
import { use, registerMap } from "echarts/core";
import { ScatterChart, EffectScatterChart } from "echarts/charts";
import VChart, { THEME_KEY } from "vue-echarts";
import {
  GeoComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent
} from "echarts/components";
import { shallowRef } from "vue";
import getData from "../data/map";
import chinaMap from "../assets/china.json";

use([
  ScatterChart,
  EffectScatterChart,
  GeoComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent
]);

registerMap("china", chinaMap);

const option = shallowRef(getData());
const map = shallowRef(null);
</script>
