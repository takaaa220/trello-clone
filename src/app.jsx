import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import BoardReducer from "./reducers/BoardReducer";
import BoardContext from "./contexts/BoardContext";

import StatusReducer from "./reducers/StatusReducer";
import StatusContext from "./contexts/StatusContext";

import Header from "./components/Header";
import Board from "./components/Board";

const tmpValues = {
  title: "オンラインコード対戦",
  cards: [
    {
      id: 1,
      title: "未着手",
      items: [
        { id: 3, text: "アニメーション" },
        { id: 4, text: "移動している元の位置から消す" }
      ]
    },
    {
      id: 2,
      title: "作業中",
      items: [
        { id: 2, text: "デプロイ" },
        { id: 5, text: "デバッグ" }
      ]
    },
    {
      id: 3,
      title: "中断中",
      items: [{ id: 7, text: "コンポーネントのCSS整理" }]
    },
    {
      id: 4,
      title: "完了",
      items: [
        { id: 10, text: "見た目の整理" },
        { id: 11, text: "ドラッグ&ドロップ" },
        { id: 12, text: "コンポーネントの分割" }
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
        <Header />
        <Board />
      </StatusContext.Provider>
    </BoardContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
