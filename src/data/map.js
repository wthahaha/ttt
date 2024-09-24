
const geoCoordMap = {
  // 在 JavaScript 的对象中，键（即属性名）必须是唯一的
  北京_联通: { geo: [116.36115, 40.64829], offsets: [0, 0], isp: '联通' },
  天津: { geo: [117.409796, 38.866354], offsets: [0, 0], isp: '联通' },
  济南_联通: { geo: [117.216624, 37.075086], offsets: [0, 0], isp: '联通' },
  合肥: { geo: [116.63711, 33.416263], offsets: [0, 0], isp: '联通' },
  无锡: { geo: [119.755451, 33.65508], offsets: [0, 0], isp: '联通' },
  金华: { geo: [119.718601, 29.073716], offsets: [0, 0], isp: '联通' },
  贵州: { geo: [106.833275, 26.707564], offsets: [0, 0], isp: '电信' },
  芜湖: { geo: [116.959062, 31.442576], offsets: [0, 0], isp: '电信' },
  兰州: { geo: [103.775241, 36.097467], offsets: [0, 0], isp: '电信' },
  海口: { geo: [110.295801, 19.99755], offsets: [0, 0], isp: '电信' },
  哈尔滨: { geo: [126.68923, 45.731724], offsets: [0, 0], isp: '电信' },
  武汉: { geo: [114.347513, 30.58982], offsets: [0, 0], isp: '电信' },
  兰州: { geo: [103.977212, 36.034958], offsets: [0, 0], isp: '移动' },
  北京_移动: { geo: [116.496342, 39.978499], offsets: [0, 0], isp: '移动' },
  南昌: { geo: [115.949818, 28.47011], offsets: [0, 0], isp: '移动' },
  呼和浩特: { geo: [107.51205, 40.830211], offsets: [0, 0], isp: '移动' },
  苏州: { geo: [120.821034, 31.271314], offsets: [0, 0], isp: '移动' },
  济南_移动: { geo: [117.327008, 35.968822], offsets: [0, 0], isp: '移动' },
  厦门: { geo: [118.13883, 24.510967], offsets: [0, 0], isp: '移动' },
  圣保罗: { geo: [-46.601689, -23.544424], offsets: [0, 0], isp: "" },
  多伦多: { geo: [-79.394107, 43.664288], offsets: [0, 0], isp: "" },
};

function formatGeoData(geoCoordMap) {
  const result = [];
  for (const name in geoCoordMap) {
    const { geo, offsets, isp } = geoCoordMap[name];
    result.push({
      name: name.split('_')[0],
      value: geo,
      isp: isp,
      label: {
        formatter: function (params) {
          const firstValue = params.value[2];
          if (firstValue === undefined) {
            return `{icon|} ${params.name}`;
          }
          return `{icon|} ${params.name}\n${firstValue}`;
        },
        rich: {
          icon: {
            height: 20,
            align: 'center',
            backgroundColor: {
              image: 'https://path_to_your_image.png'  // 你的图片URL
            }
          }
        },
        position: 'right',
        offset: offsets, // 设置标签的偏移量，避免覆盖到 symbol
        color: '#fff',        // 设置文本颜色
        fontSize: 18,         // 设置字体大小
        fontFamily: 'Arial',  // 设置字体
        show: true
      },
    });
  }
  return result;
}

export default function getData() {
  return {
    textStyle: {
      fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
      fontWeight: 300
    },
    // title: {
    //   text: "展示地图标题",
    //   top: "5%",
    //   left: "center",
    //   textStyle: {
    //     color: "#fff"
    //   }
    // },
    tooltip: {
      // 地图高亮时显示
      trigger: "item",
      show: false
    },
    // legend: {
    //   orient: "vertical",
    //   right: "5%",
    //   bottom: "5%",
    //   data: ["PM2.5"],
    //   textStyle: {
    //     color: "#fff"
    //   }
    // },
    geo: {
      map: "china",
      zoom: 1.6,
      emphasis: {
        label: {
          show: false
        },
        itemStyle: {
          areaColor: "blue"  // 地图区域被高亮时的颜色
        }
      },
      tooltip: false,
      itemStyle: {
        areaColor: "#0059B3", // 区域颜色
        borderColor: "#00c3ff", // 边界线颜色
        borderWidth: 0.3,
        // shadowColor: "green", // 边界投影颜色
        // shadowOffsetX: 0,  // 边界投影设置
        // shadowOffsetY: 5,
        // shadowBlur: 1,
      },
      top: "30%",
    },
    series: [
      {
        name: "Top 5",
        type: "effectScatter",
        coordinateSystem: "geo",
        data: formatGeoData(geoCoordMap),
        symbolSize: val => val[2] / 10,
        showEffectOn: "render",
        rippleEffect: {
          brushType: "stroke"
        },
        emphasis: {
          scale: true
        },
        tooltip: {
          show: false,
          formatter: function (val) {
            return val.name + ": " + val.value[2];
          }
        },
        symbolSize: 10,

        itemStyle: {
          color: "#f4e925",
          shadowBlur: 10,
          shadowColor: "#333"
        },
        zlevel: 1
      }
    ]
  };
}