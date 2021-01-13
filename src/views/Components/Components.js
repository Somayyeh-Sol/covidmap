import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionTabs from "./Sections/SectionTabs.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import RetriveData from "./RetriveData";

import SampleChart from "./SampleChart";
import StateResult from "./StateResult.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Covid-19 Inspector"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "blue"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title} >Covid-19 Inspector. </h1>
                <h2 className={classes.subtitle}>
                  A Covid-19 Document Maker.
                </h2>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <RetriveData/>
       
        <SectionTabs />
       
        <SampleChart/>
       
        <StateResult />
      </div>
      <Footer />
    </div>
  );
}
