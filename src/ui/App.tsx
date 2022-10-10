import React from "react";
import { MessageType } from "../shared/interfaces";
import { Types } from "../shared/msgTypes";
import { postWindowMessage } from "../shared/utils";
import Button from "./components/Button";

const App: React.FC = () => {
  const handleClickButton = () => {
    const exMsg: MessageType<{}> = {
      type: Types.EX,
    };
    console.log("click Button");
    postWindowMessage(exMsg);
  };
  return (
    <div>
      <Button onClick={handleClickButton}>하이</Button>
    </div>
  );
};

export default App;
