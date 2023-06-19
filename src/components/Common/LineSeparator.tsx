import React from "react";

interface IProps {
  width: string;
  margin: string;
  color: string;
}

export default function LineSeparator(props: IProps) {
  const { width, margin, color } = props;
  return (
    <div
      style={{
        width,
        border: "0.1px solid",
        margin,
        color,
      }}
    ></div>
  );
}
