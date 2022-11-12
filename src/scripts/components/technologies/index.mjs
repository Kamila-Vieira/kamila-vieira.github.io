import { LOADING_TIMEOUT } from "../../mock/utils.mjs";

export const Technologies = {
  init: () => {
    setTimeout(() => {
      Technologies.updateTechnologyTags();
    }, LOADING_TIMEOUT);
  },
  technologiesXP: {
    Javascript: 5,
    Typescript: 5,
    React: 5,
    Next: 3,
    Gulp: 4,
    Nodejs: 3,
    Python: 2,
    SQL: 3,
    NoSQL: 3,
    Express: 3,
    Graphql: 4,
    "API Rest": 4,
    "React Native": 3,
    Sass: 5,
    Tailwind: 4,
    "Styled Components": 5,
    Jest: 4,
    Cypress: 3,
    "Micro Front-ends": 4,
  },
  updateTechnologyTags: function () {
    const $technologyTags = document.querySelector(".sidebar-container__technologies__list");

    Object.entries(this.technologiesXP).forEach(([technology, xp]) => {
      const $technologyTag = document.createElement("li");
      const $technologyTagText = document.createElement("span");
      $technologyTag.title = technology;
      $technologyTag.classList.add("sidebar-container__technologies__list__bag");
      $technologyTagText.classList.add("sidebar-container__technologies__list__bag__text");

      setTimeout(() => {
        $technologyTagText.textContent = technology;
        $technologyTag.appendChild($technologyTagText);
        $technologyTag.classList.add(`technology-xp__${xp}`);
      }, LOADING_TIMEOUT);
      $technologyTags.appendChild($technologyTag);
    });

    $technologyTags.classList.remove("skeleton-loading-light");
  },
};
