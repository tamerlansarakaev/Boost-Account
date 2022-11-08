export const getProducts = async () => {
  const result = await fetch(
    'https://my-json-server.typicode.com/tamerlansarakaev/database/data'
  )
    .then((response) => response.json())
    .then((data) => data.products)
    .catch((error) => console.log(error));
  return result;
};

export const getRegions = async () => {
  const result = await fetch(
    'https://my-json-server.typicode.com/tamerlansarakaev/database/data'
  )
    .then((response) => response.json())
    .then((product) => product.regions)
    .catch((error) => console.log(error));
  return result;
};

export const getLinks = async () => {
  const result = await fetch(
    'https://my-json-server.typicode.com/tamerlansarakaev/database/data'
  )
    .then((response) => response.json())
    .then((product) => product.links)
    .catch((error) => console.log(error));
  return result;
};

export const getCategories = async () => {
  const result = await fetch(
    'https://my-json-server.typicode.com/tamerlansarakaev/database/data'
  )
    .then((response) => response.json())
    .then((product) => product.categories)
    .catch((error) => console.log(error));
  return result;
};

export const getMenu = async () => {
  const result = await fetch(
    'https://my-json-server.typicode.com/tamerlansarakaev/database/data'
  )
    .then((response) => response.json())
    .then((product) => product.menu)
    .catch((error) => console.log(error));
  return result;
};

export const getReviews = async () => {
  const result = await fetch(
    'https://my-json-server.typicode.com/tamerlansarakaev/database/data'
  )
    .then((response) => response.json())
    .then((product) => product.reviews)
    .catch((error) => console.log(error));
  return result;
};
