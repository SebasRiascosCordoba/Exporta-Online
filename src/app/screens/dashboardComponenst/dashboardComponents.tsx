import "./dashboardComponents.css"
import React, { useState} from "react";
import NavComponents from "./auxiliars/navComponents/navComponents";
import ControlComponentShow from "./auxiliars/controlComponentShow/controlComponentShow";

/**Import renders */
import RenderComponents from "./auxiliars/renders/renderComponents";


function DashboardComponents(){

  /** Objeto que contiene todos los renderizados de ejemplo de cada componente */
  const componentsArray = {
    "Render":<RenderComponents/>,
  }
  const [componentSelect, setComponentSelect] = useState<string|null>("Render")

  return(
    <div className="general-container-dashboardcomponents">
        <NavComponents selected={componentSelect} setSelected={setComponentSelect} arrayKeysComponents={Object.keys(componentsArray)}/>
        <div className="body-dashboardcomponents">
          <ControlComponentShow arrayComponents={componentsArray} componentSelected={componentSelect}/>
        </div>
    </div>
  )
} 

export default DashboardComponents