import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://63df8bf959bccf35dab50beb.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <>
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
        )}

        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1 className="">Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>

          <div className="d-flex flex-wrap">
            {items.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onClickFavorite={() => console.log("Добавили в закладки")}
                onPlus={(obj) => onAddToCart(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
