import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import BoardReducer from "./reducers/BoardReducer";
import BoardContext from "./contexts/BoardContext";

import StatusReducer from "./reducers/StatusReducer";
import StatusContext from "./contexts/StatusContext";

import Header from "./components/Header";
import Board from "./components/Board";
import Add from "./components/Add";

const tmpValues = {
  title: "オンラインコード対戦",
  cards: [
    {
      id: 1,
      title: "未着手",
      items: [
        { id: 1, text: "あ1" },
        { id: 3, text: "テスト3" },
        { id: 4, text: "テスト4" }
      ]
    },
    {
      id: 2,
      title: "作業中",
      items: [
        { id: 2, text: "テスト2" },
        { id: 5, text: "テスト5" },
        { id: 6, text: "テスト6" }
      ]
    },
    {
      id: 3,
      title: "中断中",
      items: [
        { id: 7, text: "テスト7" },
        { id: 8, text: "テスト8" },
        { id: 9, text: "テスト9" }
      ]
    },
    {
      id: 4,
      title: "完了",
      items: [
        { id: 10, text: "テスト10" },
        { id: 11, text: "テスト11" },
        { id: 12, text: "テスト12" }
      ]
    }
  ]
};

const status = {
  editting: false,
  dragging: false
};

const App = () => {
  const [boardState, boardDispatch] = useReducer(BoardReducer, tmpValues);
  const boardValue = { ...boardState, dispatch: boardDispatch };

  const [statusState, statusDispatch] = useReducer(StatusReducer, status);
  const statusValue = { ...statusState, statusDispatch };

  return (
    <BoardContext.Provider value={boardValue}>
      <StatusContext.Provider value={statusValue}>
        <Add onSubmit={() => console.log("hello")} />
        <Header />
        <Board />
      </StatusContext.Provider>
    </BoardContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
