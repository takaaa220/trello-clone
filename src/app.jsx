import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import BoardReducer from "./reducers/BoardReducer";
import BoardContext from "./contexts/BoardContext";

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
        { id: 1, text: "あ" },
        { id: 3, text: "テスト" },
        { id: 4, text: "テスト" }
      ]
    },
    {
      id: 2,
      title: "作業中",
      items: [
        { id: 2, text: "テスト" },
        { id: 5, text: "テスト" },
        { id: 6, text: "テスト" }
      ]
    },
    {
      id: 3,
      title: "中断中",
      items: [
        { id: 7, text: "テスト" },
        { id: 8, text: "テスト" },
        { id: 9, text: "テスト" }
      ]
    },
    {
      id: 4,
      title: "完了",
      items: [
        { id: 10, text: "テスト" },
        { id: 11, text: "テスト" },
        { id: 12, text: "テスト" }
      ]
    }
  ]
};

const App = () => {
  const [state, dispatch] = useReducer(BoardReducer, tmpValues);
  const value = { ...state, dispatch };

  return (
    <BoardContext.Provider value={value}>
      <Add onSubmit={() => console.log("hello")} />
      <Header />
      <Board />
    </BoardContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
