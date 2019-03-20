import React, {Component} from "react";
import {Line} from 'react-chartjs-2';


class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels: ['Tunde', 'Amos','Tobi', 'Bisi'],
            datasets: [{
                label: "Time-In",
                data: [7.45,2.15,7.45,7.45,7.45],

                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth:1
                
            },
            {
                label: "Time-Out",
                data:[11.00,4.00,11.00,11.00,11.00],

                borderColor: [
                    'rgba(255, 98, 132, 1)',
                    'rgba(54, 160, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth:1
                
            }
            ]
            }
        }
    }

    render(){
        return(
            <div className="Chart">
            <Line
                data={this.state.chartData}
                width={200}
                height={220}
                options={{
                maintainAspectRatio: false
                }}
            />
            </div>
        )
    }
}
export default Chart;