import * as React from "react";
import { SVGProps } from "react";
export default function Close(props: SVGProps<SVGSVGElement>) {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "1px solid #E5E5E5",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: "3%",
        top: "-7%",
        background: "#FFFFFF",
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        fill='none'
        {...props}
      >
        <path
          fill='#101111'
          fillRule='evenodd'
          d='M19.203 6.475a1 1 0 0 0 0-1.414l-.354-.354a1 1 0 0 0-1.414 0L12.662 9.48a1 1 0 0 1-1.414 0L6.475 4.707a1 1 0 0 0-1.414 0l-.354.354a1 1 0 0 0 0 1.414l4.773 4.773a1 1 0 0 1 0 1.414l-4.773 4.773a1 1 0 0 0 0 1.414l.354.354a1 1 0 0 0 1.414 0l4.773-4.773a1 1 0 0 1 1.414 0l4.773 4.773a1 1 0 0 0 1.414 0l.354-.354a1 1 0 0 0 0-1.414l-4.773-4.773a1 1 0 0 1 0-1.414l4.773-4.773Z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  );
}
