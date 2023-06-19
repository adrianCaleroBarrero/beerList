import React, { SyntheticEvent, useEffect } from "react";
import { useState } from "react";
import LineSeparator from "./LineSeparator";
import { storeService } from "../../service/ui";
import { iProduct } from "../../models/interfaces";

interface IProps {
  name: string;
  id: number;
  height: string;
  products: iProduct[];
  onChange: (ev: SyntheticEvent) => void;
}

export default function Checkbox(props: IProps) {
  const { name, id, height, onChange, products } = props;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const filtersSaved = storeService.getFilters();
    const isChecked = filtersSaved && filtersSaved.includes(id.toString());

    setChecked(isChecked);
  }, [products]);

  return (
    <div
      style={{
        height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        paddingRight: "20px",
      }}
    >
      <LineSeparator width='100%' color='#C8D5D9' margin='0' />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label>{name}</label>
        <input
          style={{
            width: "24px",
            height: "24px",
            border: "1px solid #E5E5E5",
            borderRadius: "4px",
            margin: "0",
          }}
          type='checkbox'
          checked={checked}
          onChange={(ev: SyntheticEvent) => {
            onChange(ev);
            setChecked(!checked);
          }}
          id={id.toString()}
        />
      </div>
    </div>
  );
}
