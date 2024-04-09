import { useEffect, useState } from "react";
import { getGifs } from "../../helpers/getGifs";
import { GifItem } from "../GifItem.jsx/GifItem";
import "../../../src/main.css";

export const GifGrid = ({ category }) => {
  const [image, setimage] = useState([]);

  const getImage = async () => {
    const newImage = await getGifs(category);
    setimage(newImage);
  };
  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      <h2>{category}</h2>
      <div className="card-grid">
        {image.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
