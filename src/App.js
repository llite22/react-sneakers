import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { useState } from "react";
const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 14599,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/4.jpg",
  },
];

function App() {

  


  return (
    <>
      <div className="wrapper clear">
        <Drawer />

        <Header />
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1 className="">Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>

          <div className="d-flex">
            {arr.map((obj) => (
              <Card
                key={obj.price}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onClickFavorite={() => console.log('Добавили в закладки')}
                onClickPlus={() => console.log('Нажади на +')}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
