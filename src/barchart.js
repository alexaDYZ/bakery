//Step1: import
import {Bar} from 'vue-chartjs'

export default{
    //Step 2: extend the bar chart
    extends:Bar,
    data:()=>({
        // 1st parameter: data of the chart
        chartdata: {
            labels: ['January', 'February','March','April'],
            datasets: [
              {
                label: 'Sales1',
                data: [400, 300,150,100],
                backgroundColor:'#AA6',
                borderWidth:1.0,
                borderColor:"#000"
              }
              ,
              // Display another set of data in the same bar chart
           /*   {
                  label: 'Sales2',
                  data: [40, 30,10,105],
                  backgroundColor:'#7C1'
                }*/
            ]
            
          },
          // 2nd parameter: options of chart
          options: {
              title:{
                  display:true,
                  text:'Bar Chart BT3103',
                  fontColor:'Black',
                  fontSize:15
  
              },
              legend:{
                  position:'top'
              },
              layout:{
                  padding:{
                      left: 5,
                      right: 0,
                      top: 0,
                      bottom: 5
                  }
              },
              // Eg. y starts from 0
              scales:{
                  yAxes:[{
                      ticks:{
                          min:0
                      }
                   }],
                   
              }
            
          }  
    }),
    // Step 3
    // mounted hook => 
    // (1)chart data(actual data, defined in data:())
    // parameters of chart: chart.js=> Chart Type
    // (2) Option: labels, legends position, title
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}
// Step 4 Home Component 