<template>
    <div id="main">
        <div id="chart">
            <bar-chart></bar-chart>
        </div>
        <div id="chart">
            <line-chart></line-chart>
        </div>
        <div id="chart">
            <doughnut-chart></doughnut-chart>
        </div>
        <div id="chart">
            <pie-chart></pie-chart>
        </div>

    </div>
</template>

<script>
//Step 4 Import 
//Step 5 include in the template
import barchart from '../barchart.js'
import linechart from '../linechart.js'
import doughnut from '../doughnut.js'
import pie from '../pie.js'

export default{
    components:{
        'bar-chart':barchart,
        'line-chart':linechart,
        'doughnut-chart':doughnut,
        'pie-chart':pie
    }
}
</script>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:240px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}
</style>