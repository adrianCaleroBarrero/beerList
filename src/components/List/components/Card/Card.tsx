import { storeService } from "../../../../service/ui";
import "./Card.scss";

import React, { useEffect, useState } from "react";

interface IProps {
  id: string;
  filterId: number;
  name: string;
  description: string;
  img: string;
  price: number;
  added: string[];
  onAdd: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function Card(props: IProps) {
  const {
    id,
    name,
    img,
    filterId,
    description,
    price,
    onAdd,
    onDelete,
    added,
  } = props;

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(added?.some((idAdded) => idAdded === id));
  }, [storeService.data, added]);

  return (
    <div id={id}>
      <div className='card-detail'>
        <img
          src={require(`../../../../img/${img}`)}
          width='137px'
          height='140px'
        />
        <h3 className='card-name'>{name}</h3>
        <p className='card-description'>{description}</p>
        <h4 className='card-price'>{`$${(price / 1000).toFixed(3)}`}</h4>
      </div>
      <button
        className='card-add'
        onClick={isAdded ? () => onDelete(id) : () => onAdd(id)}
      >
        {isAdded ? "BORRAR" : "AGREGAR"}
      </button>
    </div>
  );
}
