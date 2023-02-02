import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Can from ".";
import { themeTypes } from "../../../shared/constants";
import { useState } from "react";
import { ThemeType } from "../../../shared/enums";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Can",
  component: Can,
} as ComponentMeta<typeof Can>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Can> = () => {
  return <Can />;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  datas: themeTypes,
  label: "Can",
  value: ThemeType.Color,
};
