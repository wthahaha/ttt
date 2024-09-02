<template>
  <div class="container">
    <div class="full-screen">
      <div class="one">One</div>
      <div class="two">Two</div>
      <div class="three">Three</div>
      <div class="four">Four</div>
      <div class="five">Five</div>
      <div class="six">Six</div>
      <div class="seven">
        <div class="s1">s1</div>
        <div class="s2">s2</div>
        <div class="s3">s3</div>
        <!-- <div class="s4">s4</div>
        <div class="s5">s5</div>
        <div class="s6">s6</div> -->
      </div>
    </div>
    <div class="map">
      <China />
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from "vue";
import China from "./china.vue";
</script>

<style scoped>
.container {
  position: relative;
  /* 相对定位容器 */
  display: grid;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  /* 设置容器高度为屏幕高度 */
  background-color: lightblue;
  grid-template-areas: "full-screen";
  background-image: url("../images/bg.jpg");
}

.full-screen {
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(6, 1fr);
  /* 将页面分成6列，每列宽度是1等份，也就是总宽度/6,总宽度不需要指定 */
  height: 100vh;
  /* 设置容器高度为屏幕高度，需要指定 */
  grid-gap: 5px;
  grid-template-rows: repeat(4, calc(25vh - 5px));
  /* 将页面分成4行，每行高度是(总高度/4)-行间距 */
  /* z-index: 1; */
}

.map {
  position: absolute;
  /* 绝对定位 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
}

.one {
  grid-column: 1 / 2;
  /*设置每个区块开始和结束的位置 开始 / 结束 的位置 */
  grid-row: 1;
}

.two {
  grid-column: 6;
  grid-row: 1;
}

.three {
  grid-row: 2 / 4;
  grid-column: 1;
}

.four {
  grid-row: 2 / 4;
  grid-column: 6;
}

.five {
  grid-row: 4;
  grid-column: 1;
}

.six {
  grid-row: 4;
  grid-column: 6;
}

.seven {
  grid-row: 4;
  grid-column: 2 / 6;
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px;
  grid-template-rows: repeat(1, calc(25vh - 5px));
}

.seven>div {
  background-color: rgb(170, 183, 183, 0.2);
}

.one,
.two,
.three,
.four,
.five,
.six,
.seven {
  background-color: rgba(116, 85, 85, 0.2);
}
</style>
