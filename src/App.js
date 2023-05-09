import React from "react";
import Slider from "./Slider";
import "./index.css";

const images = [
  "https://avtoprokatalmaty.kz/wp-content/uploads/2020/11/1603457110MKitJW5jweNmMUcD.jpg",
  "https://kolesa-uploads.ru/-/3e5342a6-9014-4f62-a832-247d396b81fd/mercedes-maybach-s600-pullman-guard-12602.jpg",
  "https://s.auto.drom.ru/i24197/c/photos/fullsize/lexus/lx570/lexus_lx570_516849.jpg",
  "https://motorillustrated.com/wp-content/uploads/2018/12/Honda-Accord-best-selling-cars-in-Canada-1920x1200.jpg",
];

const App = () => {
  return (
    <div className="app">
      <Slider images={images} />
    </div>
  );
};

export default App;
