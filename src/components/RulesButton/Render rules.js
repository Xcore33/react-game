import React from "react";

function RulesButton(props) {
  const renderRulesImage = () =>{
      if(props.gameType === 'basic'){
        return(
          <img
          src={RulesImage}
          className="basicRulesImage"
          alt={"basicRulesImage"}
        />
        )
      } else {
          return(
            <img
            src={AdvancedRulesImage}
            className="basicRulesImage"
            alt={"basicRulesImage"}
          />
          )
      }
  }
