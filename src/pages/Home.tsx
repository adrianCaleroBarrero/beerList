import "./Home.scss";

import React, { SyntheticEvent, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import List from "../components/List/List";
import { storeService } from "../service/ui";
import NextPage from "../components/nextPage/NextPage";
import Helper from "../components/Helper/Helper";
import Footer from "../components/Footer/Footer";
import Filter from "../components/Filter/Filter";
import productsFromJson from "../products.json";
import { iProduct } from "../models/interfaces";

export default function Home() {
  const [added, setAdded] = useState(0);
  const [beersAdded, setBeersAdded] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<iProduct[]>(
    productsFromJson.products
  );

  useEffect(() => {
    const filtersSaved = storeService.getFilters();
    let filteredProducts: iProduct[] = [];
    if (filtersSaved && filtersSaved.length > 0)
      filteredProducts = productsFromJson.products.filter((prod) =>
        filtersSaved.includes(prod.filterId.toString())
      );
    else filteredProducts = productsFromJson.products;
    setProducts(filteredProducts);
  }, []);

  const onAdd = (id: string, isAdded?: boolean) => {
    storeService.add(id);
    setAdded(storeService.getAdded().length);
  };

  const onDelete = (id: string) => {
    storeService.delete(id);
    setAdded(storeService.getAdded().length);
  };

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  const onClean = () => {
    storeService.deleteAllFilters();
    setProducts(productsFromJson.products);
  };

  const onChange = (ev: SyntheticEvent) => {
    const isChecked = (ev.target as HTMLInputElement).checked;
    const id = (ev.target as HTMLInputElement).id;
    if (isChecked) {
      storeService.addFilter(id);
      const filtersSaved = storeService.getFilters();
      const filteredProducts = productsFromJson.products.filter((prod) =>
        filtersSaved.includes(prod.filterId.toString())
      );
      setProducts(filteredProducts);
    } else {
      storeService.deleteFilter(id);
      const filtersSaved = storeService.getFilters();
      let filteredProducts: iProduct[] = [];
      if (filtersSaved && filtersSaved.length > 0)
        filteredProducts = productsFromJson.products.filter((prod) =>
          filtersSaved.includes(prod.filterId.toString())
        );
      else filteredProducts = productsFromJson.products;
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    const objectsAdded = storeService.getAdded();
    setAdded(objectsAdded?.length);
    setBeersAdded(objectsAdded);
  }, [storeService.data, added]);

  return (
    <div className='home'>
      <Header added={added} />
      <List
        title='Cervezas'
        onAdd={onAdd}
        onDelete={onDelete}
        added={beersAdded}
        products={products}
      />
      <NextPage title='Vinos' />
      <Helper />
      <Footer />
      <Filter
        isOpen={isOpen}
        onOpen={onOpen}
        onChange={onChange}
        products={products}
        onClean={onClean}
      />
    </div>
  );
}
