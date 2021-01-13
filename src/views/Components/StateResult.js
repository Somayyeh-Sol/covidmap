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

export default function StateResult(){
    const classes = useStyles();

    const[covidStateData,setCovidStateData] = useState({});
    const[covidError,setCovidError]= useState();

    useEffect(()=>{
        axios.get('https://api.covidtracking.com/v1/states/info.json')
        .then(
            (response)=>{
                setCovidStateData(response.data[0]);

            }
        )
        .catch(
            error => {
                setCovidError(error.response.data.message);
            }

        );
    }
    ,[] );

    return(
            <div className={classes.section}>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={8}>
                            <h1> Each State Information</h1>
                            <h3> State 's Name</h3>
                            <p id="date"> { covidStateData.name}</p>
                            <h3>State 's Initial</h3>
                            <p id="death">{covidStateData.state} </p>
                            <h3> Twitter Page </h3>
                            <p id="positive"> { covidStateData.twitter}</p>

                            <p style={{color:'red'}} > {covidError} </p>
                        
                        </GridItem>
                    </GridContainer>

                    
                </div>
            </div>
    );

}