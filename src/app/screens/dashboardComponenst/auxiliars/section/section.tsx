
import React, { useState, useEffect, Children } from "react";
import "./section.css"

 interface propsSection{
    children: JSX.Element,
    name: string,
    element: string,
    height: string,
    descirption: string
 }

function Section(props:propsSection){
  return(
    <div className="section-dashboardcomponents-section">
      <div className="header-dashboardcomponents-section">
        <div className="title-section-dashboardcomponents-section">
          Nombre
          <div style={{color:"#330099"}} className="text-Heading3-coreclass">{props.name}</div>
        </div>
        <div className="title-section-dashboardcomponents-section">
          Etiqueta
          <div  style={{color:"#330099"}} className="text-Heading3-coreclass">{props.element}</div>
        </div>
      </div>
      <div  style={{height:props.height}}  className="body-section-dashboardcomponents-section">
        <div className="description-component-dashboardcomponents-section">
          <div className="text-Paragraph-coreclass">
            {props.descirption}
          </div>
        </div>
        <div className="container-component-dashboardcomponents-section">
              {
                props.children
              }
        </div>
      </div>
    </div>
  )
}

export default Section