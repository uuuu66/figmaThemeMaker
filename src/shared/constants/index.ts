import { ThemeType } from "../enums";
import { DataListType } from "../interfaces";
import { translateThemeType } from "../utils";

export const themeTypes: DataListType<string>[] = [
  { value: ThemeType.Color, label: translateThemeType(ThemeType.Color) },
  { value: ThemeType.Spacing, label: translateThemeType(ThemeType.Spacing) },
  { value: ThemeType.Text, label: translateThemeType(ThemeType.Text) },
];
