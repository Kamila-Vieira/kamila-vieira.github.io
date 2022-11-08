import showdown from "showdown";
import { Api } from "../../services/api/index.mjs";

export const Repositories = {
  init: () => {
    Repositories.getUserRepositories();

    // Repositories.getUserRepository("kamila-vieira.github.io");
  },
  technologies: [],
  getUserRepositories: async () => {
    const data = await Api.getReposList();
    const repositoriesProjects = data?.map((repository) => {
      Repositories.getAllTechnologies(repository.name);
      return {
        name: repository?.name,
        html_url: repository?.html_url,
        description: repository?.description,
        language: repository?.language,
        stargazers_count: repository?.stargazers_count,
        forks_count: repository?.forks_count,
      };
    });
    Repositories.updateProjectCards(repositoriesProjects);
  },
  getAllTechnologies: async (repoName) => {
    const data = await Api.getRepoLanguages(repoName);
    console.log(data);
    // Repositories.technologies
    // Repositories.updateTechnologyTags([])
  },
  updateTechnologyTags: (technologies) => {
    const $technologyTags = document.querySelector(".sidebar-container__technologies__list");
    const $technologyTag = document.createElement("li");
    $technologyTag.classList.add("sidebar-container__technologies__list__bag");
    // $technologyTag.textContent = ''
    $technologyTags.classList.remove("skeleton-loading-light");
  },
  updateProjectCards: (projects) => {
    const $projectCardsList = document.querySelector(".main-container__projects__list");

    projects.forEach((project) => {
      const $projectCard = document.createElement("li");
      $projectCard.classList.add("main-container__projects__list__item");
      $projectCard.classList.add("box-container__rounded");
      const cardContent = Repositories.projectCardContent(project);
      $projectCard.innerHTML = cardContent;
      $projectCardsList.appendChild($projectCard);
    });

    $projectCardsList.classList.remove("skeleton-loading-dark");
  },

  projectCardContent: (projectData) => {
    const converter = new showdown.Converter();
    const projectDescription = converter.makeHtml(projectData?.description || "");
    const elementContent = `
      <a href="${projectData?.html_url || ""}" alt="${projectData?.name}">
        <strong><i class="fantasticon-folder"></i>${projectData?.name}</strong>
        <p>${projectDescription}</p>
        <div>
          <div>
            <span><i class="fantasticon-star"></i>${projectData?.stargazers_count || 0}</span>
            <span><i class="fantasticon-map-pin"></i>${projectData?.forks_count || 0}</span>
          </div>
          ${
            projectData?.language
              ? `<span><i class="pin-${projectData.language}"></i>${projectData.language}</span>`
              : ""
          }
        </div>
      </a>
    `;
    return elementContent;
  },
};
