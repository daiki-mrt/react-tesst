import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// コンポーネントのファイル名は大文字で始める
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowflag, setFaceShowFlag] = useState(false);

  const onClickCountUP = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowflag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowflag || setFaceShowFlag(true);
      } else {
        faceShowflag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUP}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowflag && <p>(´・ω・｀)</p>}
    </>
  );
};

export default App;
