import { MessageType } from "../shared/interfaces";
import { Types } from "../shared/msgTypes";

figma.showUI(__html__);

figma.ui.onmessage = (msg: MessageType<any>) => {
  console.log(msg);
  if (msg.type === Types.EX) {
    console.log(figma.currentPage.findChildren());

    const nodes: SceneNode[] = [];
    const square = figma.createRectangle();
    figma.currentPage.appendChild(square);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }
};
