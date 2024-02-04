const originalBreakPoints: number[] = [300, 360, 576, 768, 992, 1280];
const breakpoints: any = [...originalBreakPoints];

const mediaQueries = {
  print: '@media print',
  xxs: `@media screen and (max-width: ${breakpoints[0]}px)`,
  xs: `@media screen and (max-width: ${breakpoints[1]}px)`,
  sm: `@media screen and (max-width: ${breakpoints[2]}px)`,
  md: `@media screen and (max-width: ${breakpoints[3]}px)`,
  lg: `@media screen and (max-width: ${breakpoints[4]}px)`,
  xl: `@media screen and (max-width: ${breakpoints[5]}px)`,
};

breakpoints.xxs = `${breakpoints[0]}px`;
breakpoints.xs = `${breakpoints[1]}px`;
breakpoints.sm = `${breakpoints[2]}px`;
breakpoints.md = `${breakpoints[3]}px`;
breakpoints.lg = `${breakpoints[4]}px`;
breakpoints.xl = `${breakpoints[5]}px`;

export {
  originalBreakPoints,
};

export default {
  breakpoints,
  mediaQueries,
};
