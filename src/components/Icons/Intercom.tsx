import * as React from "react";
import { SVGProps } from "react";
export default function Intercom(props: SVGProps<SVGSVGElement>) {
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
          width={24}
          height={24}
          fill='none'
          {...props}
        >
          <path
            fill='#0F0F0F'
            fillRule='evenodd'
            d='M17.002 4C18.105 4 19 4.891 19 5.996v10.258c0 .046-.002.091-.005.137l-.004 3.683-4.22-1.824H6.998A1.996 1.996 0 0 1 5 16.254V5.996C5 4.894 5.897 4 6.998 4h10.004ZM7.738 14.043c-.366-.337-.595-.105-.716.049-.12.154-.116.428-.007.633.109.205 2.314 1.517 5.059 1.517 2.744 0 4.782-1.285 4.953-1.517.172-.232.23-.4 0-.611-.229-.213-.319-.126-.616.008-.297.135-2.245 1.293-4.38 1.274-2.135-.02-3.927-1.017-4.293-1.353Z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <p>CHAT</p>
    </div>
  );
}
