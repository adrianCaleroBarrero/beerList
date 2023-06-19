import * as React from "react";
import { SVGProps } from "react";
export default function Search(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      {...props}
    >
      <path
        fill='#FFFFFF'
        fillRule='evenodd'
        d='M9.98 16.479a6.504 6.504 0 1 1 5.811-3.58c-.215.427-.172.955.167 1.293l4.44 4.44a1 1 0 0 1 0 1.415l-.353.354a1 1 0 0 1-1.414 0l-4.443-4.444c-.338-.338-.866-.381-1.293-.167a6.477 6.477 0 0 1-2.915.689Zm0-2.5a4.004 4.004 0 1 0 0-8.008 4.004 4.004 0 0 0 0 8.008Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
