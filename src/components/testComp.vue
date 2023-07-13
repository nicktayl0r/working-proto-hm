<template>
  <div>
    <h1>Input</h1>
    <div class="asdf">
      <div>
        <h2>height</h2>
        <input type="number" v-model.number="height">
        <h2>width</h2>
        <input type="number" v-model.number="width">
      </div>
      <div>
        <h2>Grid Size</h2>
        <input type="number" v-model="gridSize">
      </div>
      <div>
        <h2>pValue</h2>
      <select v-model.number="pValue">
        <option disabled value="">Please select one:</option>
        <option>2</option>
        <option>4</option>
        <option>8</option>
        <option>16</option>
      </select>

      </div>
       <div class="jsonedit">
        <h2>Points</h2>
        <JsonEditorVue
          v-model="points"

        />
       </div>

      <div>
        <h2>Colors</h2>
        <div v-for="(c,i) in colors" :key="c">
          <input :key="c" type="color" @input="changeColor(i, $event, c)" :value="c">
          <button @click="deleteColor(i)">[X]</button>
        </div>
        <button @click="addColor">Add Color</button>

      </div>

      <button @click="redrawChart">redraw</button>
    </div>
    <h1>Output</h1>
    <div class="foo" ref="chart"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
// import VueJsonPretty from 'vue-json-pretty';
import JsonEditorVue from 'json-editor-vue'
import 'vue-json-pretty/lib/styles.css';

export default {
  components: {
    // VueJsonPretty,
    JsonEditorVue
  },
  data() {
    return {
      gridSize: 5,
      pValue: 2,
      points: [
        {
          x: 17.7,
          y: 241.7,
          value: 65,
        },
        {
          x: 40.1,
          y: 256.1,
          value: 67,
        },
        {
          x: 22.5,
          y: 194.5,
          value: 71,
        },
        {
          x: 47.3,
          y: 208.1,
          value: 73,
        },
        {
          x: 69,
          y: 228,
          value: 70,
        },
        {
          x: 72,
          y: 286.5,
          value: 74,
        },
        {
          x: 101,
          y: 297,
          value: 79,
        },
        {
          x: 100,
          y: 255,
          value: 74,
        },
        {
          x: 165,
          y: 301.7,
          value: 74,
        },
        {
          x: 202,
          y: 298,
          value: 76,
        },
        {
          x: 207.5,
          y: 256,
          value: 79,
        },
        {
          x: 222.5,
          y: 320,
          value: 78,
        },
        {
          x: 253,
          y: 306,
          value: 80,
        },
        {
          x: 317.7,
          y: 280,
          value: 79,
        },
        {
          x: 343,
          y: 314,
          value: 74,
        },
        {
          x: 350,
          y: 275,
          value: 80,
        },
        {
          x: 413.7,
          y: 288.9,
          value: 75,
        },
        {
          x: 330,
          y: 235,
          value: 76,
        },
        {
          x: 364,
          y: 224,
          value: 79,
        },
        {
          x: 418,
          y: 201,
          value: 75,
        },
        {
          x: 427,
          y: 229,
          value: 74,
        },
        {
          x: 370,
          y: 130,
          value: 71,
        },
        {
          x: 413,
          y: 57.7,
          value: 74,
        },
        {
          x: 334.5,
          y: 151,
          value: 79,
        },
        {
          x: 297,
          y: 182.5,
          value: 80,
        },
        {
          x: 262.5,
          y: 173,
          value: 79,
        },
        {
          x: 198,
          y: 193,
          value: 80,
        },
        {
          x: 130,
          y: 206,
          value: 78,
        },
        {
          x: 77.7,
          y: 196.1,
          value: 73,
        },
        {
          x: 76,
          y: 168,
          value: 74,
        },
        {
          x: 100,
          y: 174,
          value: 71,
        },
        {
          x: 158,
          y: 164,
          value: 74,
        },
        {
          x: 233,
          y: 154,
          value: 80,
        },
        {
          x: 315,
          y: 113,
          value: 75,
        },
        {
          x: 349,
          y: 65,
          value: 75,
        },
        {
          x: 349,
          y: 21,
          value: 72,
        },
        {
          x: 286,
          y: 31,
          value: 71,
        },
        {
          x: 268,
          y: 51,
          value: 71,
        },
        {
          x: 251,
          y: 28,
          value: 65,
        },
        {
          x: 226,
          y: 46,
          value: 74,
        },
        {
          x: 274,
          y: 100,
          value: 74,
        },
        {
          x: 227,
          y: 110,
          value: 79,
        },
        {
          x: 150,
          y: 119,
          value: 74,
        },
        {
          x: 78,
          y: 132,
          value: 70,
        },
        {
          x: 47,
          y: 143,
          value: 67,
        },
        {
          x: 52,
          y: 116,
          value: 65,
        },
        {
          x: 90,
          y: 74,
          value: 66,
        },
        {
          x: 120,
          y: 68,
          value: 74,
        },
        {
          x: 160,
          y: 83,
          value: 79,
        },
        {
          x: 109,
          y: 42.5,
          value: 74,
        },
        {
          x: 181,
          y: 19,
          value: 75,
        },
      ],
      colors: ['#ff0000', '#00ff00', '#00ffff'],
      height:336,
      width: 432
    }
  },
  updated() {
    console.info("updated", this.colors)
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    redrawChart() {
      var s = d3.selectAll("svg");
      s.remove();
      this.drawChart();
    },
    deleteColor(i) {
      console.info("X")
      this.colors = this.colors.splice(i, 1);
    },
    addColor() {
      this.colors.push("#ff0000");
    },
    changeColor(i, e) {
      console.log(e.target.value, this.colors, i)
      this.colors[i] = e.target.value
    },
    drawChart() {
      const data = this.points;
      const colorRange = this.colors
      const p = this.pValue;
      const gridSize = this.gridSize;
      const width = this.width;
      const height = this.height;

      // is it fine grained enough to see solutions?
      // image at coords

      const svg = d3
        .select(this.$refs.chart)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      const colorScale = d3
        .scaleSequential(d3.interpolateRgbBasis(colorRange))
        .domain([65, 80]);

      const interpolateValue = (x, y) => {
        let totalWeight = 0;
        let interpolatedValue = 0;

        data.forEach((d) => {
          const distance =
            Math.sqrt((x - d.x) ** p + (y - d.y) ** p) + 10 ** -15;
          const weight = 1 / distance;
          totalWeight += weight;
          interpolatedValue += weight * d.value;
        });

        return interpolatedValue / totalWeight;
      };

      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          const interpolated = interpolateValue(x, y);
          svg
            .append("rect")
            .attr("x", x)
            .attr("y", y)
            .attr("width", gridSize)
            .attr("height", gridSize)
            .style("fill", colorScale(interpolated));
        }
      }
    },
  },
};
</script>

<style>
.jsonedit > * {
  max-height: 45vh;
  overflow: scroll;
}
.foo {
  border: 1px solid red;
  padding: 20px;
}
svg {
  background-color: #fff;
}

.asdf {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>