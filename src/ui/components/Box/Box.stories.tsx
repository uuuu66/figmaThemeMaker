import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from ".";
import { themeTypes } from "../../../shared/constants";
import { useState } from "react";
import { ThemeType } from "../../../shared/enums";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Box",
  component: Box,
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = () => {
  return <Box />;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  datas: themeTypes,
  label: "Box",
  value: ThemeType.Color,
};
