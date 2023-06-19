import * as React from "react";
import { SVGProps } from "react";
export default function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      {...props}
    >
      <path
        fill='#0000A3'
        fillRule='evenodd'
        d='M12.48 12.752a1 1 0 0 0 0-1.414L7.707 6.565a1 1 0 0 1 0-1.414l.354-.354a1 1 0 0 1 1.414 0l6.541 6.542a1 1 0 0 1 0 1.414l-1.06 1.06h-.002l-5.48 5.48a1 1 0 0 1-1.413 0l-.354-.354a1 1 0 0 1 0-1.414l4.773-4.773Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
