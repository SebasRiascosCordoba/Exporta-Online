import React, { useState} from "react";
import "./controlComponentShow.css"

interface propsControlComponentShow{
  arrayComponents: {[key: string]: JSX.Element};
  componentSelected: string|null
}

function ControlComponentShow(props: propsControlComponentShow){
  return(
    <>  
    {
      props.componentSelected && props.arrayComponents[props.componentSelected]
    }
    </>
  )
}

export default ControlComponentShow