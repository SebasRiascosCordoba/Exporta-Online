
import React, { useContext, createContext, useState,useEffect  } from "react";
import './App.css'

//importación de componentes


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import './App.css';
export default function App() {

  useEffect(() => {
    console.log("iniciando front . . .");
  })

  /* cada compónente dentro de esta distribución de navegación, es una pantalla, que su ves contiene
  componentes */
  return (
      <Router>
        <Switch>
          <Route exact path="/">
             <div>
               Hellow world reactttt
             </div>
          </Route>
        </Switch>
      </Router>
  );
}
