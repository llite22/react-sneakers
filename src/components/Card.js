import React from "react";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="favorite">
          <img src="/img/heart-unliked.svg" alt="Unlicked" />
        </div>
        <img width={133} heigth={112} src="/img/sneakers/1.jpg" alt="" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999руб.</b>
          </div>
          <button className="button">
            <img width={11} heigth={11} src="/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
