export const getProducts = async () => {
  const result = await fetch('http://localhost:3000/products')
    .then((response) => response.json())
    .then((product) => product)
    .catch((error) => console.log(error));
  return result;
};

export const getRegions = async () => {
  const result = await fetch('http://localhost:3000/regions')
    .then((response) => response.json())
    .then((product) => product)
    .catch((error) => console.log(error));
  return result;
};

export const getLinks = async () => {
  const result = await fetch('http://localhost:3000/links')
    .then((response) => response.json())
    .then((product) => product)
    .catch((error) => console.log(error));
  return result;
};

export const getCategories = async () => {
  const result = await fetch('http://localhost:3000/categories')
    .then((response) => response.json())
    .then((product) => product)
    .catch((error) => console.log(error));
  return result;
};

export const getMenu = async () => {
  const result = await fetch('http://localhost:3000/menu')
    .then((response) => response.json())
    .then((product) => product)
    .catch((error) => console.log(error));
  return result;
};

export const getReviews = async () => {
  const result = await fetch('http://localhost:3000/reviews')
    .then((response) => response.json())
    .then((product) => product)
    .catch((error) => console.log(error));
  return result;
};
