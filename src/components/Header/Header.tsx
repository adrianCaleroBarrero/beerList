import "./Header.scss";

import React from "react";
import Logo from "../Icons/Logo";
import Menu from "../Icons/Menu";
import Search from "../Icons/Search";
import Card from "../Icons/Card";

interface IProps {
  added: number;
}

export default function Header(props: IProps) {
  const { added } = props;
  return (
    <div className='header'>
      <div className='header-group'>
        <Menu />
        <Logo />
      </div>
      <div className='header-group'>
        <Search />
        <Card />
        {added > 0 && <p className='header-added'>{added}</p>}
      </div>
    </div>
  );
}
