import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <React.Fragment>
    <header className="Header">
      <ul className="HeaderIcon">
        <div className="HeaderIcon__Item">H</div>
        <div className="HeaderIcon__Item">M</div>
        <div className="HeaderIcon__Item">S</div>
      </ul>
      <div className="Header__Heading">Trello</div>
      <ul className="HeaderIcon">
        <div className="HeaderIcon__Item">＋</div>
        <div className="HeaderIcon__Item">B</div>
        <div className="HeaderIcon__Item" />
      </ul>
    </header>
    <div className="Board">
      <div className="BoardHeader">
        <h2 className="BoardHeader__Heading">オンラインコード対戦</h2>
      </div>
      <div className="ListArea">
        <div className="List">
          <div className="ListHeader">
            <h3 className="ListHeader__Heading">未着手</h3>
            <div>+</div>
          </div>
          <ul className="ListCard">
            <li className="ListCard__Item">テスト</li>
            <li className="ListCard__Item">テスと</li>
            <li className="ListCard__Item">テスおt</li>
          </ul>
        </div>
        <div className="List">
          <div className="ListHeader">
            <h3 className="ListHeader__Heading">未着手</h3>
            <div>+</div>
          </div>
          <ul className="ListCard">
            <li className="ListCard__Item">テスト</li>
            <li className="ListCard__Item">テスと</li>
            <li className="ListCard__Item">テスおt</li>
          </ul>
        </div>
        <div className="List">
          <div className="ListHeader">
            <h3 className="ListHeader__Heading">未着手</h3>
            <div>+</div>
          </div>
          <ul className="ListCard">
            <li className="ListCard__Item">テスト</li>
            <li className="ListCard__Item">テスと</li>
            <li className="ListCard__Item">テスおt</li>
          </ul>
        </div>
        <div className="List">
          <div className="ListHeader">
            <h3 className="ListHeader__Heading">未着手</h3>
            <div>+</div>
          </div>
          <ul className="ListCard">
            <li className="ListCard__Item">テスト</li>
            <li className="ListCard__Item">テスと</li>
            <li className="ListCard__Item">テスおt</li>
          </ul>
        </div>
      </div>
    </div>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById("root"));
