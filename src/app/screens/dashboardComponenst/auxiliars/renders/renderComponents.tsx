import React, { useState} from "react";
import Section from "../section/section";
import InputWk from "@app10s/components/inputWk/inputWk";


const RenderComponents= ()=>{

  const [errordetect, setErrordetect] = useState<{type:"error"|"check"|"normal",textError: string}>({
    type:"normal",textError:"Es un error"
  })
  const [errordetect2, setErrordetect2] = useState<{type:"error"|"check"|"normal",textError: string}>({
    type:"normal",textError:"Es un error"
  })
  const [valueInput, setValueInput] =useState("")


  return(

    <Section 
      descirption="Aquí voy a agregar todos los componentes de la aplicación"
      height="max-content" name="Estos son todos" element="" > 
        <>
          <div className="container-grid-automatic-dashboardcomponents">
            <InputWk label="mi input" size="medium"></InputWk>
          </div>

          <div className="container-grid-automatic-dashboardcomponents">
                <InputWk type={"password"} size="large" controlType={errordetect} setValue={setValueInput}  value={valueInput} label="large"/>
                <InputWk size="medium" controlType={errordetect2}  setValue={setValueInput} value={valueInput} label="Medium"/>
                <InputWk size="small" controlType={errordetect} setValue={setValueInput} value={valueInput}  label="Small"/>
          </div>
          <div className="container-grid-automatic-dashboardcomponents">
                <InputWk disable type={"password"} size="medium" controlType={errordetect} setValue={setValueInput}  value={valueInput} label="Medium"/>
                <InputWk disable size="medium" controlType={errordetect2}  setValue={setValueInput} value={valueInput} label="Medium"/>
                <InputWk disable size="small" controlType={errordetect} setValue={setValueInput} value={valueInput}  label="Small"/>
          </div>
          <div className="container-grid-automatic-dashboardcomponents">
                <InputWk size="large" type="password" controlType={errordetect2} setValue={setValueInput} value={"one value set"}  label="Label" styleContent={{backgroundColor:"#F2F5F9"}}/>
                <InputWk size="medium" controlType={errordetect2} setValue={setValueInput} value={"one value set"}  label="Label" styleContent={{backgroundColor:"#F2F5F9"}}/>
                <InputWk size="small" controlType={errordetect2} setValue={setValueInput} value={"one value set"}  label="Label" styleContent={{backgroundColor:"#F2F5F9"}}/>
          </div>
          <div className="container-grid-automatic-dashboardcomponents">
                <InputWk size="large" controlType={{type:"error",textError:"Es un error"}} setValue={setValueInput} value={valueInput} label="Label"/>
                <InputWk size="medium" controlType={{type:"error",textError:"Es un error"}} setValue={setValueInput} value={valueInput} label="Label"/>
                <InputWk type={"password"} size="small" controlType={{type:"error",textError:"Es un error"}} setValue={setValueInput}  value={valueInput} label="Label"/>
          </div>
          <div className="container-grid-automatic-dashboardcomponents">
                <InputWk size="large" controlType={{type:"check",textError:"Es un error"}} setValue={setValueInput} value={valueInput} label="Label"/>
                <InputWk size="medium" controlType={{type:"check",textError:"Es un error"}} setValue={setValueInput} value={valueInput} label="Label"/>
                <InputWk type={"password"} size="small" controlType={{type:"check",textError:"Es un error"}} setValue={setValueInput}  value={valueInput} label="Label"/>
          </div>


        </>
      </Section>
  )
}

export default RenderComponents