import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { ICON_CHARS, GAME_TYPES, PLAYER_TURNS } from "../helpers/constants";
import "./Board.css";
const ICON_PLACE_HOLDER = "";

const Square = ({ index, context }) => {
  const value = context.cells[index];
  const icon = value !== null ? ICON_CHARS[value] : ICON_PLACE_HOLDER;
  const isDoneClass = icon !== ICON_PLACE_HOLDER ? "done" : "";

  return (
    <button
      className={`cell cell-${index} ${isDoneClass}`}
      onClick={() => context.humanPlay(index)}
    >
      {icon}
    </button>
  );
};

Square.propTypes = {
  context: PropTypes.object,
  index: PropTypes.number.isRequired
};

const Board = ({ context }) => {
  const boardRef = useRef(null);
  let textInfo = "";
  const currentIconType = context.currentIcon;

  useEffect(() => {
    if (context.gameState.position !== "") {
      setTimeout(() => {
        boardRef.current.classList.add("full");
      }, 50);
    } else {
      boardRef.current.classList.remove("full");
    }
  }, [context.gameState.position]);

  if (context.gameState.isTie) {
    textInfo = "Tie!";
  } else {
    if (context.gameType === GAME_TYPES.TWO_PLAYERS) {
      if (context.gameState.position === "") {
        textInfo = `It's player(${ICON_CHARS[currentIconType]}) turn`;
      } else {
        textInfo = `Player(${ICON_CHARS[1 - currentIconType]}) wins!`;
      }
    } else {
      if (context.gameState.position === "") {
        if (context.playerTurn === PLAYER_TURNS.HUMAN)
          textInfo = `It's your turn`;
        else textInfo = `It's computer turn`;
      } else {
        if (context.playerTurn === PLAYER_TURNS.HUMAN)
          textInfo = `Computer win!`;
        else textInfo = `You win!`;
      }
    }
  }
  return (
    <main className="main">
      <div className="new-game">
        <button className="btn" onClick={() => context.newGame()}>
          New Game
        </button>
      </div>
      <div className={`board ${context.gameState.position}`} ref={boardRef}>
        <div className="board-row">
          <Square context={context} index={0} />
          <Square context={context} index={1} />
          <Square context={context} index={2} />
        </div>

        <div className="board-row">
          <Square context={context} index={3} />
          <Square context={context} index={4} />
          <Square context={context} index={5} />
        </div>

        <div className="board-row">
          <Square context={context} index={6} />
          <Square context={context} index={7} />
          <Square context={context} index={8} />
        </div>
      </div>
      <div className="info">{textInfo}</div>
    </main>
  );
};

Board.propTypes = {
  context: PropTypes.object,
};

export default Board;
