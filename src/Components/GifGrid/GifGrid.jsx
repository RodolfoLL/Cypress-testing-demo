import { useEffect, useState } from "react";
import { getGifs } from "../../helpers/getGifs";
import { GifItem } from "../GifItem.jsx/GifItem";

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
      <div>
        {image.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
