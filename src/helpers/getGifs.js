export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=xCkMtEa66f2u29IAqgAGXFG1TB0EJ6T3&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gifs)

  return gifs;
};
