
const REVIEWS_URI =
  'https://boost-account-fdb27-default-rtdb.europe-west1.firebasedatabase.app/reviews.json';

const MAIN_URI =
  'https://boost-account-fdb27-default-rtdb.europe-west1.firebasedatabase.app/';

export const getProducts = async () => {
  const result = await fetch(`${MAIN_URI}products.json`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return result;
};

export const getRegions = async () => {
  const result = await fetch(`${MAIN_URI}regions.json`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return result;
};

export const getLinks = async () => {
  const result = await fetch(`${MAIN_URI}links.json`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return result;
};

export const getCategories = async () => {
  const result = await fetch(`${MAIN_URI}categories.json`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return result;
};

export const getMenu = async () => {
  const result = await fetch(`${MAIN_URI}menu.json`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return result;
};

export const getReviews = async () => {
  const result = await fetch(`${MAIN_URI}reviews.json`)
    .then((response) => response.json())
    .then((reviews) => {
      if (!reviews) return [];
      const allReviews = Object.values(reviews);
      const result = allReviews.map((review) => {
        const id = Object.keys(reviews)[0];
        return { ...review, id };
      });
      return result || [];
    })
    .catch((error) => console.log(error));
  return result;
};

export const postReview = async (review, time) => {
  await fetch(REVIEWS_URI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: review.nameInput,
      titleReview: review.reviewInput,
      description: review.feedbackInput,
      rate: review.rate,
      publictaionDate: time,
    }),
  });
};
