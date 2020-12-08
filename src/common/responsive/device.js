import { css } from "styled-components";
import sizes from "./sizes"

const devices = {
  desktop: `@media only screen and (min-width: ${sizes.desktop.minWidth}px)`,
  tablet: `@media only screen and (min-width: ${sizes.tablet.minWidth}px) and (max-width: ${sizes.tablet.maxWidth}px)`,
  mobile: `@media only screen and (max-width: ${sizes.mobile.maxWidth}px)`,
  default: `@media only screen and (min-width: ${sizes.default.minWidth}px)`,
}

const media = Object.keys(devices).reduce((accumulator, label) => {
  const size = devices[label]
  accumulator[label] = (...args) => css`
    ${size} {
      ${css(...args)};
    }
  `;
  return accumulator
}, {});

export default media
