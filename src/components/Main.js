import React from "react";
import { useAppContext } from "./../context/AppProvider";
import Board from "./Board";
import Choice from "./Choice";
import './main.css'
function Main() {
  const context = useAppContext();

  return (
    <div className="layout">
      {context.step === 1 && <Choice context={context} />}
      {context.step === 2 && <Board context={context} />}
    </div>
  );
}

export default Main;
