import React, { useState } from "react";
import PropTypes from "prop-types";
import { GAME_TYPES } from "../helpers/constants";
import "./choice.css";
const Choice = ({ context }) => {
  const [steper, setSteper] = useState({
    step: 1,
    text: "Choose Your Play Mode",
    history: null,
  });

  const updateStepper = (data) => {
    setSteper({ step: 2, history: data, text: "Pick Your Side" });
  };

  return (
    <div className="choice">
      <h1>{steper.text}</h1>
      {steper.step === 1 ? (
        <ul>
          <li
            onClick={() => updateStepper(GAME_TYPES.TWO_PLAYERS)}
            className={"2 Players" === context.gameType ? "active" : ""}
          >
            With a friend
          </li>
          <li
            onClick={() => updateStepper(GAME_TYPES.VERSUS_COMPUTER)}
            className={"Versus Computer" === context.gameType ? "active" : ""}
          >
            With AI
          </li>
        </ul>
      ) : (
        <ul>
          <li
            onClick={() => context.changeType(steper.history, 2, 1)}
            className={"2 Players" === context.gameType ? "active" : ""}
          >
            X
          </li>
          <li
            onClick={() => context.changeType(steper.history, 2, 0)}
            className={"Versus Computer" === context.gameType ? "active" : ""}
          >
            0
          </li>
        </ul>
      )}
    </div>
  );
};

Choice.propTypes = {
  context: PropTypes.object.isRequired,
};

export default Choice;
