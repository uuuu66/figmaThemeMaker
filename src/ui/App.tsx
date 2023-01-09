import React from "react";
import { MessageType } from "../shared/interfaces";
import { Types } from "../shared/msgTypes";
import { postWindowMessage } from "../shared/utils";
import Button from "./components/Button";

const App: React.FC = () => {
  const handleClickFlattenButton = () => {
    const exMsg: MessageType<{}> = {
      type: Types.FLATTEN,
    };
    postWindowMessage(exMsg);
  };
  return (
    <div>
      <Button onClick={handleClickFlattenButton}>다듬기</Button>
    </div>
  );
};

export default App;
