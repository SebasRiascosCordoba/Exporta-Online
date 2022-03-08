import "./inputWk.css"
import * as CSS from 'csstype';
import React, { useState, useEffect } from "react";
import iconCheck from "../../assets/icons/check-green.svg"
import iconerrorClose from "../../assets/icons/close-small-red.svg"

interface CSSProperties extends CSS.Properties<string | number> {} /**Cargar typo de propiedades CSS  */
interface propsInputWk{
  label: string,                                                      /* Titulo del input */
  size: "large"|"small"|"medium",                                     /* Tamaño */
  disable?: boolean,                                                  /* habilitación de escritura */
  value?: string,                                                     /* Si se debe cargar un valor previo */
  setValue?: React.Dispatch<React.SetStateAction<string>>,             /* set state */
  controlType?: {
    type: "error"|"check"|"normal",
    textError: string 
  }|null,                                                             /* control para errores o aciertos */
  styleContent?: CSSProperties,                                        /* Estilo que se le puede agregar al componente que encapsula todo el contenido del input */
  type?: React.HTMLInputTypeAttribute
}

/**COMPONENTE DE ENTRADA DE TEXTO CORTO */

function InputWk (props:propsInputWk){

  /*CONTROL DE TAMAÑO*/
  let heightInput: string
  let fontSizeInput: string
  if(props.size == "large"){
    heightInput="35px"
    fontSizeInput="17px"
  }else if(props.size == "medium"){
    heightInput="30px"
    fontSizeInput="15px"
  }else if(props.size == "small"){
    heightInput="25px"
    fontSizeInput="13px"
  }else{
    heightInput="35px"
    fontSizeInput="15px"
  }

  /**CONTROL DE ESTILO CONTENEDOR */
  const [select, setSelect] = useState(false)
  const[classSeletc, setClassSeletc] = useState("container-input-inputwk")
  useEffect(()=>{
    if(props.disable){
      setClassSeletc("container-input-inputwk-disable")
    }
    else{
      if(select){
        setClassSeletc("container-input-inputwk-selected")
      }
      else{
        setClassSeletc("container-input-inputwk")
      }
    }
  },[select,props.disable])

  //**CONTROL DE ENFOQUE */
  const handlerFocus= ()=>{
    setSelect(!select)
  }

  const [borderColorAlert,setBorderColorAlert] = useState("")
  useEffect(()=>{
    if(props.controlType?.type == "error"){
      setBorderColorAlert("#F6352D")
    }else if(props.controlType?.type == "check"){
      setBorderColorAlert("#38DB99")
    }
  },[props.controlType])

  const clearByErrorHandler= ()=>{
    props.setValue && props.setValue("")
  }
  const onChangeInputHandler= (e)=>{
    props.setValue && props.setValue(e.target.value)
  }
  
  return(
    <div style={{...props.styleContent, opacity: props.disable ? "0.7" : "1"}} className="general-container-inputwk">
      <div className="zone-label-inputwk">
        <div className="text-Paragraph-coreclass">{props.label}</div>
      </div>
      <div style={ props.controlType?.type != "normal" ? {borderColor: borderColorAlert}:{}} className={classSeletc}>
        <input type={props.type} value={props.value} onChange={onChangeInputHandler} disabled={props.disable} onBlur={handlerFocus}  onFocus={handlerFocus} style={{height: heightInput, fontSize:fontSizeInput}} placeholder="Place holder text"/>
        {
          props.controlType?.type == "check" ?
            <img className="icon-checkerror-inputwk" src={iconCheck}></img>:
          (props.controlType?.type == "error" ? 
            <img onClick={clearByErrorHandler} className="icon-checkerror-inputwk-error" src={iconerrorClose}></img>:
            <div style={{width:"5px"}}></div>
          )
        }
      </div>
      <div className="zone-error-inputwk">
        {
           props.controlType?.type =="error" &&
          <div className="text-Small-Bold-coreclass">{props.controlType.textError}</div>
        }
      </div>
    </div>
  )
}

export default InputWk
