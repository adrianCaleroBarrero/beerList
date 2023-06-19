import * as React from "react";
import { SVGProps } from "react";
export default function Filters(props: SVGProps<SVGSVGElement>) {
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
        d='M5.109 4.83a.506.506 0 0 1 .103-.725A.549.549 0 0 1 5.536 4h13.928c.296 0 .536.232.536.518a.506.506 0 0 1-.109.313l-6.05 7.714v5.937a.505.505 0 0 1-.09.287.548.548 0 0 1-.744.144l-1.609-1.036a.513.513 0 0 1-.238-.43v-4.902L5.109 4.83Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
