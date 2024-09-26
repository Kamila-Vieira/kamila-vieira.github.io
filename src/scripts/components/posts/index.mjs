import { LOADING_TIMEOUT } from "../../mock/utils.mjs";

export const Posts = {
  init: () => {
    const $postsContainer = document.querySelector(".main-container__posts__list");

    setTimeout(() => {
      $postsContainer.classList.remove("skeleton-loading-dark");
    }, LOADING_TIMEOUT);
  },
};
