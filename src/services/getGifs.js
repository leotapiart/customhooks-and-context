const apiKey = "U0N1cwjKdzCMYE19ofV99xlRev9CSG9S";
const parameters =
  "limit=10&offset=0&rating=g&lang=en&bundle=clips_grid_picker";

const getGifs = ({ keyword = "panda" } = "") => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&${parameters}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((gif) => {
        return {
          url: gif.images.original.url,
          title: gif.title,
          id: gif.id,
        };
      });
      return gifs;
    })
    .catch((error) => {
      console.error("Error al obtener los gifs:", error);
    });
};
export default getGifs;
