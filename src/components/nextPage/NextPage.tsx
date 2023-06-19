import "./NextPage.scss";

import React from "react";
import ArrowRight from "../Icons/ArrowRight";

interface IProps {
  title: string;
}

export default function NextPage(props: IProps) {
  const { title } = props;
  return (
    <div className='next-page'>
      <div>
        <p className='next-page-text next-page-title'>Sigue mercando</p>
        <h3 className='next-page-text'>{title}</h3>
      </div>
      <ArrowRight />
    </div>
  );
}
