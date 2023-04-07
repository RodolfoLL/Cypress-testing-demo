import { useState } from "react";
import { InputText } from "../InputText/InputText";
import "./GiftExpertApp.css";
import { GifGrid } from "../GifGrid/GifGrid";
export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };
  //en las props se puede mandar datos,primitivos,objetos como tambien funciones
  return (
    <div className="container">
      <h1 className="title">GiftExpertApp</h1>
      <InputText onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
