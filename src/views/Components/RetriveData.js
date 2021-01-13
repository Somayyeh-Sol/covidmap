import React, { useEffect , useState} from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

import axios from 'axios';

const useStyles = makeStyles(styles);

export default function RetriveData(){
    const classes = useStyles();

    const[covidData,setCovidData] = useState({});
    const[covidError,setCovidError]= useState();

    useEffect(()=>{
        axios.get('https://api.covidtracking.com/v1/us/current.json')
        .then(
            (response)=>{
                setCovidData(response.data[0]);

                console.log(response.status);
                console.log(response.data);
               
                
            }
        )
        .catch(
            error => {
                setCovidError(error.response.data.message);
                console.log(error.response.data);

            }

        );
        
    }
    ,[] );

    return(
<div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
          <h1> Covid 19 Api s</h1>
          <h3> Today's date</h3>
            <p id="date"> { covidData.date}</p>
            <h3>Today's death number</h3>
            <p id="death">{covidData.death} </p>
            <h3> Today's positive cases </h3>
             <p id="positive"> { covidData.positive}</p>

            <p style={{color:'red'}} > {covidError} </p>
           
          </GridItem>
        </GridContainer>

        
      </div>
    
            
            
        </div>
    );

}