import { MessageType } from "../shared/interfaces";
import { Types } from "../shared/msgTypes";
import { getRectangleColor, getTarget } from "./shared/utils";

figma.showUI(__html__);

figma.ui.onmessage = async (msg: MessageType<any>) => {
  if (msg.type === Types.FLATTEN) {
    const rectangles: RectangleNode[] = [];
    const colors: string[] = [];
    console.log(
      getTarget({
        nodeId: figma.currentPage.selection[0].id,
        returnValue: rectangles,
        target: "RECTANGLE",
      })
    );
    for (let i = 0; i < rectangles.length; i += 1) {
      colors.push(getRectangleColor({ targetRectangle: rectangles[i] }));
      const newFrame = figma.createFrame();
      const newText = figma.createText();
      await Promise.all(
        newText
          .getRangeAllFontNames(0, newText.characters.length)
          .map(figma.loadFontAsync)
      );
      newText.characters = getRectangleColor({
        targetRectangle: rectangles[i],
      });
      newFrame.appendChild(rectangles[i]);
      newFrame.appendChild(newText);
      newText.y += 100;
      figma.currentPage.appendChild(newFrame);
    }
  }
};
