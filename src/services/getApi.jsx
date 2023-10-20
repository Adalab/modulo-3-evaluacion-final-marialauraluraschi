import uuid from 'react-uuid';
const getApi = () => {
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((response) => {
      const cleanData = response.map((item) => {
        return {
          movie: item.movie,
          year: item.year,
          director: item.director,
          frase: item.full_line,
          poster: item.poster,
          audio: item.audio,
          id: uuid(),
        };
      });
      return cleanData;
    });
};

export default getApi;
