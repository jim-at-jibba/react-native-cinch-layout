import React from "react";
/**
 * Returns an array of valid css declarations generated
 * from the react props supplied.
 *
 * @param {array} props list of react props
 */
export const generateStyles = props => {
  console.log("GEN", props)
  return [
    props.padding && `padding: ${props.padding};`,
    props.margin && `margin: ${props.margin};`,
    props.width && `width: ${props.width};`,
    props.height && `height: ${props.height};`,
    props.color && `color: ${props.color};`,
    props.background && `background: ${props.background};`,
    //props.border && `border: ${props.border};`,
  ];

}
export const drawDebug = () => [
  "background: rgba(0, 255, 255, 0.1);",
  "border: 1px dashed rgba(255, 0, 255, 1);",
];

export const flex = ({
  flex,
  fill,
  flexDirection,
  wrap,
  valign,
  halign
}) => {
  const props = [];
  if (flex) props.push(`flex: ${flex};`);
  if (flexDirection) {
    props.push(`flex-direction: ${translations.direction[flexDirection]};`);
  }

  if (wrap) props.push(`flex-wrap: ${translations.wrap[wrap]};`);

  if (halign) {
    if (flexDirection === "horizontal")
      props.push(`justify-content: ${translations.align[halign]};`);
    else props.push(`align-items: ${translations.align[halign]};`);
  }

  if (valign) {
    if (flexDirection === "horizontal")
      props.push(`align-items: ${translations.align[valign]};`);
    else props.push(`justify-content: ${translations.align[valign]};`);
  }

  return props;
};

const translations = {
  direction: {
    horizontal: "row",
    vertical: "column",
  },
  wrap: {
    true: "wrap",
    1: "wrap",
    false: "nowrap",
    0: "nowrap",
  },
  align: {
    top: "flex-start",
    left: "flex-start",
    bottom: "flex-end",
    right: "flex-end",
    center: "center",
    middle: "center",
  },
};

export const stripBoolean = (Element) => ({ debug, fluid, fill, wrap, ...props }) => {
    return <Element {...props} />
}
