
import React,  {Component , useEffect,useState} from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts';
import axios from 'axios';


function SampleChart() {	

	const [chartDataPoint,setChartDataPoint]=useState([{indexLabel: "AL", y: 4774}]);

	const [stateNameFinder,setStateNameFinder] = useState([]);
	useEffect( ()=>{
		
	  axios.get(`https://api.covidtracking.com/v1/states/info.json`)
		.then(
		  (response)=>{
			let dataPoints=[];
			setStateNameFinder(response.data);
			response.data.forEach((stateName)=> {
				axios.get(`https://api.covidtracking.com/v1/states/${stateName.state}/current.json`)
				.then(
				(response)=>{
					//setStateDeath(response.data);
					let pointData={ indexLabel: stateName.state , y:response.data.death };
					dataPoints.push(pointData);
					setChartDataPoint([...dataPoints,pointData]);
				}
			)

		.catch(
			error => {
				console.log(error.response.data);

			});

				});
				console.log(dataPoints);

		//	setChartDataPoint(dataPoints);
			}
		)
	  .catch(
		  error => {
			   console.log(error.response.data);
  
		  });
	}
	  ,[])
  	  
	
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Simple Column Chart with Index Labels"
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: chartDataPoint
			}]
		}
		
		
		return (
		<div>
						
			{chartDataPoint.length>0 && <CanvasJSChart options = {options} 	/>}
		
		</div>
		);
	}

 export default SampleChart;
