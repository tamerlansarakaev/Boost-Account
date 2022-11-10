import { getCategories, getLinks, getMenu, getProducts, getRegions, getReviews } from "./API";

function combineAPI () {
  return {
    getProducts: getProducts,
    getRegions: getRegions,
    getLinks: getLinks,
    getCategories: getCategories,
    getMenu: getMenu,
    getReviews: getReviews,
  }
}

export default combineAPI