import React, { useState } from "react";

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const PrevClick = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const NextClick = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="wrapper">
      <h1>Автомобиль мечты</h1>
      <img className="img" src={images[index]} alt={`Slide ${index}`} />
      <div className="buttons">
        <button className="btn" onClick={PrevClick}>
          Предыдущий
        </button>
        <button className="btn" onClick={NextClick}>
          Следующий
        </button>
      </div>
      <p>
        Автомобиль — любимая игрушка взрослых мужчин. У всех свой вкус и каждому
        человеку нравится своя модель автомобиля. Кто-то любит спортивные тачки,
        а кто-то более классические.
      </p>
    </div>
  );
};

export default Slider;
