import React from "react";
import style from "./styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={style.container}>
    <div className={style.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};

export default Loading;
