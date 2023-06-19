import { log } from "console";
import Checkbox from "../Common/Checkbox";
import Filters from "../Icons/Filters";
import "./Filter.scss";

import React, { SyntheticEvent, useEffect, useState } from "react";
import { storeService } from "../../service/ui";
import { iProduct } from "../../models/interfaces";
import Close from "../Icons/Close";

interface IProps {
  onOpen: () => void;
  onClean: () => void;
  isOpen: boolean;
  products: iProduct[];
  onChange: (ev: SyntheticEvent) => void;
}

export default function Filter(props: IProps) {
  const { onOpen, onChange, onClean, isOpen, products } = props;
  const [filterSaved, setFilterSaved] = useState<string[]>([]);
  const filters = [
    { name: "Rubia", id: 1 },
    { name: "Morena", id: 2 },
    { name: "Roja", id: 3 },
  ];

  useEffect(() => {
    const filtersStored = storeService.getFilters();
    if (filtersStored) setFilterSaved(filtersStored);
  }, [products]);

  return (
    <>
      {!isOpen ? (
        <div className='filter'>
          <button className='filter-button' onClick={onOpen}>
            FILTRAR <Filters />
          </button>
        </div>
      ) : (
        <div className='filter-open'>
          <div className='filter-open-header'>
            <h3 className='filter-open-header-title'>Filtros</h3>
            <Close onClick={onOpen} />
          </div>

          <div className='filter-open-filters'>
            {filters.map((filter) => (
              <Checkbox
                name={filter.name}
                id={filter.id}
                height='50px'
                onChange={onChange}
                products={products}
              />
            ))}
          </div>
          <div className='filter-open-footer'>
            <button
              className={
                filterSaved.length > 0
                  ? "filter-button-clean"
                  : "filter-button-clean-disabled"
              }
              disabled={filterSaved.length <= 0}
              onClick={onClean}
            >
              LIMPIAR
            </button>
            <button className='filter-button' onClick={onOpen}>
              FILTRAR <Filters />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
