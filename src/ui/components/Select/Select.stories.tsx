import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from ".";
import { themeTypes } from "../../../shared/constants";
import { useState } from "react";
import { ThemeType } from "../../../shared/enums";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Select",
  component: Select,
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  datas: themeTypes,
  label: "Select",
  value: ThemeType.Color,
};
