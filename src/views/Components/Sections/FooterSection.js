import React ,{useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import axios from 'axios';
//import Button from 'components/CustomButtons/Button.js';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(styles);

export default function FooterSection() {


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
      <div>

          <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h3>
              <small>Tabs with Icons on Card</small>
            </h3>
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: "Cases",
                  tabIcon: Face,
                  tabContent: (
                    <p className={classes.textCenter}>
                     info1
                    </p>
                  )
                },
                {
                  tabName: "Viral Test",
                  tabIcon: Chat,
                  tabContent: (
                    <p className={classes.textCenter}>
                      info2
                    </p>
                  )
                },
                {
                  tabName: "Antibody Test",
                  tabIcon: Build,
                  tabContent: (
                    <p className={classes.textCenter}>
                      info3
                    </p>
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h3>
              <small>Tabs with Icons on Card</small>
            </h3>
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: "Hospitalization",
                  tabIcon: Face,
                  tabContent: (
                    <p className={classes.textCenter}>
                     info1
                    </p>
                  )
                },
                {
                  tabName: "Outcomes",
                  tabIcon: Chat,
                  tabContent: (
                    <p className={classes.textCenter}>
                      info2
                    </p>
                  )
                },
                {
                  tabName: "Long-term Care ",
                  tabIcon: Build,
                  tabContent: (
                    <p className={classes.textCenter}>
                      info3
                    </p>
                  )
                }
              ]}
            />
          </GridItem>
          </GridContainer>
          </div>);
}