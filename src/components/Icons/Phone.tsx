import * as React from "react";
import { SVGProps } from "react";
export default function Phone(props: SVGProps<SVGSVGElement>) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          background: "#FFFFFF",
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={25}
          height={24}
          fill='none'
          {...props}
        >
          <path
            fill='#0F0F0F'
            d='M18.62 15c3.112 1.08 3.198-.461 2.547-3.094-1.4-5.087-15.446-5.086-16.84.029-.607 2.607-.624 4.144 2.553 3.055 2.175-.74 2.067-.84 2.068-2.797.021-1.398 2.084-1.366 3.795-1.39h.043c1.737.009 3.731.019 3.743 1.37-.001 1.957-.102 2.065 2.09 2.827Z'
          />
        </svg>
      </div>
      <p>LLAMAR</p>
    </div>
  );
}
