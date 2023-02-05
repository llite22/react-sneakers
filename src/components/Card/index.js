import React, { useState } from "react";
import styles from "./Card.module.scss";


const Card = ({imageUrl, title, price, onClickFavorite, onPlus}) => {

 const [isAdded, setIsAdded] = useState(false);

 const onClickPlus = () => {
  onPlus();
  setIsAdded(!isAdded)
 }


  return (
    <>
      <div className={styles.card}>
        <div className={styles.favorite} onClick={onClickFavorite}>
          <img src="/img/heart-unliked.svg" alt="Unlicked" />
        </div>
        <img width={133} heigth={112} src={imageUrl} alt="" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price}руб.</b>
          </div>
          {
            <img
              className={styles.plus}
              onClick={onClickPlus} 
              src={isAdded ? '/img/btn-checked.svg'  : '/img/btn-plus.svg'}
              alt="Plus"
            />
          }
        </div>
      </div>
    </>
  );
};

export default Card;
