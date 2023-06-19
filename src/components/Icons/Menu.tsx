import * as React from "react";
import { SVGProps } from "react";
export default function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
    >
      <path
        fill='#FFFFFF'
        fillRule='evenodd'
        d='M3 18.25h18v-2.5H3v2.5Zm0-5h18v-2.5H3v2.5Zm0-7.5v2.5h18v-2.5H3Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
