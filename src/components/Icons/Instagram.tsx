import * as React from "react";
import { SVGProps } from "react";
export default function Instagram(props: SVGProps<SVGSVGElement>) {
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
          width: "34px",
          height: "34px",
          borderRadius: "50%",
          background: "#0000A3",
          marginBottom: "9px",
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
            fill='#DADADA'
            fillRule='evenodd'
            d='M12 5.48c2.129 0 2.38.009 3.221.047.778.036 1.2.165 1.48.274.373.144.638.317.917.595.28.278.452.543.597.914.109.28.239.701.274 1.477.039.838.047 1.09.047 3.213s-.008 2.375-.047 3.213c-.035.776-.165 1.197-.274 1.477a2.463 2.463 0 0 1-.597.914c-.279.279-.544.45-.916.595-.281.109-.703.238-1.48.274-.841.038-1.093.046-3.222.046s-2.38-.008-3.221-.046c-.778-.035-1.2-.165-1.48-.274a2.47 2.47 0 0 1-.917-.595 2.463 2.463 0 0 1-.597-.914c-.109-.28-.239-.701-.274-1.477-.039-.838-.047-1.09-.047-3.213s.008-2.375.047-3.213c.035-.776.165-1.197.274-1.477.145-.371.318-.636.597-.914a2.47 2.47 0 0 1 .916-.595c.281-.109.703-.238 1.48-.274.841-.038 1.093-.046 3.222-.046m0-1.433c-2.165 0-2.437.01-3.287.048-.848.038-1.428.173-1.935.37a3.909 3.909 0 0 0-1.412.917 3.897 3.897 0 0 0-.92 1.408c-.197.506-.331 1.084-.37 1.93-.039.849-.048 1.12-.048 3.279 0 2.16.009 2.43.048 3.279.039.846.173 1.424.37 1.93.204.523.477.966.92 1.408.443.442.888.714 1.412.918.507.196 1.087.33 1.935.37.85.038 1.122.047 3.287.047s2.437-.01 3.287-.048c.848-.038 1.428-.173 1.935-.37a3.908 3.908 0 0 0 1.412-.917c.443-.442.716-.885.92-1.408.197-.506.332-1.084.37-1.93.039-.848.048-1.12.048-3.279 0-2.16-.009-2.43-.048-3.279-.038-.846-.173-1.424-.37-1.93a3.896 3.896 0 0 0-.92-1.408 3.91 3.91 0 0 0-1.412-.918c-.507-.196-1.087-.33-1.935-.37-.85-.038-1.122-.047-3.287-.047m0 10.603A2.654 2.654 0 0 1 9.343 12c0-1.464 1.19-2.65 2.657-2.65A2.654 2.654 0 0 1 14.657 12c0 1.464-1.19 2.65-2.657 2.65Zm0-6.734A4.089 4.089 0 0 0 7.906 12 4.089 4.089 0 0 0 12 16.084 4.089 4.089 0 0 0 16.094 12 4.089 4.089 0 0 0 12 7.917Zm5.212-.162a.955.955 0 0 1-.956.954.955.955 0 1 1 .956-.954'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  );
}
