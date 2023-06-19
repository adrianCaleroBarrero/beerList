import "./List.scss";

import React from "react";
import Card from "./components/Card/Card";
import { iProduct } from "../../models/interfaces";

interface IProps {
  title: string;
  onAdd: (id: string) => void;
  onDelete: (id: string) => void;
  added: string[];
  products: iProduct[];
}

export default function List(props: IProps) {
  const { title, onAdd, onDelete, added, products } = props;

  return (
    <div className='list'>
      <h1 className='list-title'>{title}</h1>
      <div className='list-products'>
        {products.map((beer) => (
          <Card
            id={`${beer.name}-${beer.filterId}`}
            filterId={beer.filterId}
            img={beer.img}
            description={beer.description}
            name={beer.name}
            price={beer.price}
            onAdd={onAdd}
            onDelete={onDelete}
            added={added}
          />
        ))}
      </div>
    </div>
  );
}
