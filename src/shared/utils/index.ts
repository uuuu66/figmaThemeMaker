import { MessageType } from "../interfaces";
import { Types } from "../msgTypes";

export const postWindowMessage = (msg: MessageType<any>) => {
  parent.postMessage({ pluginMessage: msg }, "*");
};
export const postCloseMessage = () => {
  const closeMessage: MessageType = {
    type: Types.CLOSE_UI,
  };
  postWindowMessage(closeMessage);
};
