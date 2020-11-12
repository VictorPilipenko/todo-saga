/* eslint-disable no-unused-expressions */
import { css } from "styled-components";

const sizes = {
  giant: 1900,
  desktop: 1280,
  tablet: 769,
  phone: 450,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label];
  accumulator[label] = (...args) => css`
    @media only screen and (max-width: ${emSize}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

const theme = {
  bodyBg: "#e9ecef",
  colorWhite: "#FFFFFF",
  colorBlack: "#000000",
  colorBlue100: "#D0E4ED",
  colorBlue200: "#b8d5e3",
  colorBlue300: "#5F9BB1",
  colorBlue400: "#1280AC",
  colorBlue500: "#0f7fac",
  colorBlue600: "#037CB7",
  colorBlue700: "#3071a9",
  colorBlue800: "#285e8e",
  colorBlue: "#007DAE",
  colorGreen100: "#F0F7EF",
  colorGreen200: "#6FBF6D",
  colorGreen300: "#5BB75C",
  colorGreen: "#00B050",
  colorRed100: "#fdebeb",
  colorRed200: "#BE3343",
  colorRed: "#CC4855",
  colorDarkRed: "#DB5250",
  colorYellow100: "#F9E1C5",
  colorYellow: "#fffaeb",
  colorYellowDark: "#ffca2b",
  colorYellow200: "#ebc273",
  colorLightGrey: "#EFF0F4",
  colorGrey100: "#eaecf1",
  colorGrey: "#A0A2A5",
  colorDarkGrey: "#898989",
  colorCreamy: "#f2f2f2",
  colorDisabled: "#eff0f473",
  colorLightBorder: "#DBDBDB",
  colorBorder: "#CBCBCB",
  colorShadow: "#00000029",
  colorTextBlack: "#303032",
  defaultIndent: "1rem",
  defaultTextSize: "10px",
};

export const colorsSchema = {
  primary: theme.colorBlue,
  secondary: theme.colorRed,
  accent: theme.colorYellow100,
  neutral: theme.colorLightGrey,
};

export const themeSchema = {
  fontColor: theme.colorTextBlack,
  bodyBg: theme.bodyBg,
  primaryBgColor: theme.colorCreamy,
  primaryBtn: theme.colorBlue,
  secondaryBtn: theme.colorRed,
  sectionAccent: theme.colorYellow100,
  sectionDarkBg: theme.colorBlue200,
  sectionLightBg: theme.colorBlue100,
  listAccentColor: theme.colorYellow,
};

export default theme;
