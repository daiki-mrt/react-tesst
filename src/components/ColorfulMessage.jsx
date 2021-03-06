import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color, //color: は省略できる
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
