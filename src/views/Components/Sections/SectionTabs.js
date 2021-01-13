import React ,{useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import axios from 'axios';
//import Button from 'components/CustomButtons/Button.js';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(styles);

export default function SectionTabs() {


  const [stateNameFinder,setStateNameFinder] = useState([]);
  useEffect( ()=>{
    axios.get(`https://api.covidtracking.com/v1/states/info.json`)
      .then(
        (response)=>{
          setStateNameFinder(response.data);

        }
    )
    .catch(
        error => {
             console.log(error.response.data);

        });
  }
    ,[])

   const [stateCovidData,setStateCovidData] = useState({});

  const loadStateData=(event)=>{
      let stateName=event.currentTarget.value;
      axios.get(`https://api.covidtracking.com/v1/states/${stateName}/current.json`)
      .then(
        (response)=>{
            setStateCovidData(response.data);
        }
    )
    .catch(
        error => {
             console.log(error.response.data);

        });
      }
  


  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
            <h3>Data by State </h3>
         <h3> select state name </h3>
              
          <div class="_2d3a2 _7c3a3">
            <ul style={ 
              {color:'red' , listStyle:'none' , paddingLeft:10, margin:0 , display:"flex", flexWrap:"wrap", justifyContent:"flex-start"}
            }>
              {stateNameFinder.map((item)=>
              <li style={ {padding:15}} ><Button link onClick={(e)=>loadStateData(e) } color="primary" value={item.state} key={item.state} >{item.state}</Button></li> )}
            
            </ul>
            </div>

            <div className={classes.section}>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={8}>
                            <h1> Each State Information</h1>
                            <h3> State 's date</h3>
                            <p id="date"> { stateCovidData.date}</p>
                            <h3>State 's Initial</h3>
                            <p id="state">{stateCovidData.state} </p>
                            <h3> Total Death </h3>
                            <p id="death"> { stateCovidData.death}</p>
 
                        </GridItem>
                    </GridContainer>
                </div>
            </div>

      </div>
   
    </div>
  );
}
