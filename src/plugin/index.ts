import { MessageType } from "../shared/interfaces";
import { Types } from "../shared/msgTypes";
import { CreateColorMsgValue } from "../ui/pages/Make/Color";
import { getRectangleColor, getTarget, hexToRGB } from "./shared/utils";

figma.showUI(__html__, { width: 1000, height: 800 });

figma.ui.onmessage = async (msg: MessageType<any>) => {
  if (msg.type === Types.FLATTEN) {
    const rectangles: RectangleNode[] = [];
    getTarget({
      nodeId: figma.currentPage.selection[0].id,
      returnValue: rectangles,
      target: "RECTANGLE",
    });

    const newFrame = figma.createFrame();
    newFrame.x = rectangles[0].absoluteBoundingBox.x;
    newFrame.y = rectangles[0].absoluteBoundingBox.y;
    /* Frame 48 */

    /* Auto layout */

    // display: flex;
    // flex-direction: column;
    // align-items: flex-start;
    // padding: 0px;
    // gap: 8px;

    // width: 120px;
    // height: 168px;

    // /* Inside auto layout */

    // flex: none;
    // order: 0;
    // flex-grow: 0;

    const newText = figma.createText();

    await figma.loadFontAsync({ family: "Inter", style: "Regular" });

    const color = getRectangleColor({ targetRectangle: rectangles[0] });
    newText.characters = `${color}`;
    newText.y += rectangles[0].absoluteBoundingBox.height;
    newFrame.appendChild(newText);
    newFrame.appendChild(rectangles[0]);
    figma.currentPage.appendChild(newFrame);
  }

  if (msg.type === Types.CREATE_COLOR) {
    const thisMsg = msg as MessageType<CreateColorMsgValue>;
    const { values, group, number, primaryIndex } = thisMsg.value;
    const newText = figma.createText();
    try {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      await figma.loadFontAsync({ family: "Noto Sans", style: "Bold" });
      const newFrame = figma.createFrame();
      newText.characters = group;
      newText.fontName = { family: "Noto Sans", style: "Bold" };

      newText.fontSize = 24;
      newFrame.appendChild(newText);
      figma.currentPage.appendChild(newFrame);
      newFrame.layoutMode = "HORIZONTAL";
      newFrame.verticalPadding = 32;
      newFrame.horizontalPadding = 24;
      newFrame.itemSpacing = 24;
      const { width, height } = newFrame.absoluteBoundingBox;
      for (let i = 0; i < number; i += 1) {
        const cardFrame = figma.createFrame();
        cardFrame.layoutMode = "VERTICAL";
        newFrame.itemSpacing = 8;
        cardFrame.verticalPadding = 32;
        newFrame.horizontalPadding = 24;
        const groupText = figma.createText();
        groupText.characters = group + (i + 1);

        if (i < values.length) {
          const colorRec = figma.createRectangle();
          colorRec.cornerRadius = 8;
          const colorText = figma.createText();
          colorText.characters = values[i];
          const fills = clone(colorRec.fills);
          const covertedHex = hexToRGB(values[i].slice(1));

          fills[0].color.r = covertedHex[0];
          fills[0].color.g = covertedHex[1];
          fills[0].color.b = covertedHex[2];

          colorRec.fills = fills;
          cardFrame.appendChild(colorRec);
          cardFrame.appendChild(groupText);
          cardFrame.appendChild(colorText);
          newFrame.appendChild(cardFrame);
        } else {
          const colorRec = figma.createRectangle();
          colorRec.cornerRadius = 8;
          cardFrame.appendChild(colorRec);
          cardFrame.appendChild(groupText);
          const colorText = figma.createText();
          colorText.characters = "지정안됨";
          cardFrame.appendChild(colorText);
          newFrame.appendChild(cardFrame);
        }
      }
      newFrame.x = figma.viewport.center.x;
      newFrame.y = figma.viewport.center.y;
      newFrame.resizeWithoutConstraints(width, 400);
    } catch (err) {}
  }
};
const clone = (val) => {
  return JSON.parse(JSON.stringify(val));
};
