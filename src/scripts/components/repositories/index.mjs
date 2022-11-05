import { Api } from "../../services/api/index.mjs";

export const Repositories = {
  init: () => {
    Repositories.getUserRepositories();
    Repositories.getUserRepository("kamila-vieira.github.io");
  },

  getUserRepositories: async () => {
    const data = await Api.getReposList();
    console.log(data);
  },

  getUserRepository: async (repoName) => {
    const data = await Api.getRepoData(repoName);
    console.log(data);
  },
};
