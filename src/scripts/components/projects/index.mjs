import showdown from "showdown";
import { Api } from "../../services/api/index.mjs";

export const Projects = {
  init: () => {
    Projects.handleOpenProjects();
    Projects.getUserRepositories();
  },
  getUserRepositories: async function () {
    const data = await Api.getReposList();
    const repositoriesProjects = data?.map((repository) => {
      return {
        name: repository?.name,
        html_url: repository?.html_url,
        homepage: repository?.homepage,
        description: repository?.description,
        language: repository?.language,
        stargazers_count: repository?.stargazers_count,
        forks_count: repository?.forks_count,
      };
    });
    this.updateProjectCards(repositoriesProjects);
  },
  updateProjectCards: function (projects) {
    const $projectCardsList = document.querySelector(".main-container__projects__list");

    if (!projects) {
      const $projectCardEmpty = document.createElement("li");
      $projectCardEmpty.classList.add("main-container__projects__list__item-empty");
      $projectCardEmpty.textContent = "A lista está vazia no momento :(";
      $projectCardsList.classList.add("empty-list");
      $projectCardsList.appendChild($projectCardEmpty);
    } else {
      projects?.forEach((project) => {
        const $projectCard = document.createElement("li");
        $projectCard.classList.add("main-container__projects__list__item");
        $projectCard.classList.add("box-container__rounded");
        const cardContent = this.projectCardContent(project);
        $projectCard.innerHTML = cardContent;
        $projectCardsList.appendChild($projectCard);
      });
    }

    $projectCardsList.classList.remove("skeleton-loading-dark");
  },
  projectCardContent: function (projectData) {
    const converter = new showdown.Converter();
    const projectDescription = converter.makeHtml(projectData?.description || "");
    const elementContent = `
      <a 
        href="${projectData?.homepage || projectData?.html_url || ""}" 
        alt="${projectData?.name}" 
        class="project-card__link" 
        target="_blank">
        <strong class="project-card__link__name">
          <i class="fantasticon-folder"></i>
          ${projectData?.name}
        </strong>
        <div class="project-card__link__description">${projectDescription}</div>
        <div class="project-card__link__bottom">
          <div class="project-card__link__bottom__left">
            <span class="project-card__link__bottom__left__item"><i class="fantasticon-star"></i>${
              projectData?.stargazers_count || 0
            }</span>
            <span class="project-card__link__bottom__left__item"><i class="fantasticon-map-pin"></i>${
              projectData?.forks_count || 0
            }</span>
          </div>
          ${
            projectData?.language
              ? `<span class="project-card__link__bottom__language"><i class="pin-${projectData.language
                  .toLowerCase()
                  .split(" ")
                  .join("-")}"></i>${projectData.language}</span>`
              : ""
          }
        </div>
      </a>
    `;
    return elementContent;
  },
  handleOpenProjects: () => {
    const $seeAllButton = document.querySelector(
      ".main-container__projects__heading__title__see-all"
    );
    const $repositoriesContainer = document.querySelector(
      ".main-container__projects__list__container"
    );

    $seeAllButton.addEventListener("click", () => {
      $repositoriesContainer.classList.toggle("opened");
    });
  },
};
