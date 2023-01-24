import { ThemeType } from "../enums";
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

export const translateThemeType = (menuType: ThemeType) => {
  switch (menuType) {
    case ThemeType.Color:
      return "색상";
    case ThemeType.Spacing:
      return "스페이싱";
    case ThemeType.Text:
      return "폰트";
  }
};
