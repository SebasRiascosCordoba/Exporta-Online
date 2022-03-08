import React, { useState, useEffect, Children } from "react";
import "./navComponents.css"


interface propsNavComponents{
  arrayKeysComponents: string[],
  setSelected: React.Dispatch<React.SetStateAction<string | null>>
  selected: string|null
}

function NavComponents(props:propsNavComponents){

  const clickItemHandler= (key)=>{
    props.setSelected(key)
  }

  return(
    <div className="general-containerdashboardnavcomponents">
      <div style={{marginTop: "10px", marginLeft:"20px", color:"#C184FF"}} className="text-Heading4-coreclass">Componentes web Wekall</div>
      <div className="list-dashboardcomponents-navcomponents">
          {
            props.arrayKeysComponents.map((value,index)=>(
              <div key={"navcomponent"+index} className="item-list-dashboardcomponents-navcomponents">
                <div onClick={()=>{clickItemHandler(value)}}  style={{color: props.selected == value ? "#C184FF" :"#fff", textAlign:"center", fontWeight:"700"}} className="text-Paragraph-coreclass">{value}</div> 
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default NavComponents