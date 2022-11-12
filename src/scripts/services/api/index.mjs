import axios from "axios";
import { GIT_USER, GIT_API_USERS, GIT_API_REPOS } from "../../mock/api.mjs";

export const Api = {
  getUserData: async () => {
    try {
      const response = await axios({
        method: "get",
        baseURL: GIT_API_USERS,
        url: `/${GIT_USER}`,
      });

      return response.data;
      return {};
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getReposList: async () => {
    try {
      const response = await axios({
        method: "get",
        baseURL: GIT_API_USERS,
        url: `/${GIT_USER}/repos?per_page=100&sort=pushed`,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getRepoData: async (repoName) => {
    try {
      const response = await axios({
        method: "get",
        baseURL: GIT_API_REPOS,
        url: `/${GIT_USER}/${repoName}`,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getRepoLanguages: async (repoName) => {
    try {
      const response = await axios({
        method: "get",
        baseURL: GIT_API_REPOS,
        url: `/${GIT_USER}/${repoName}/languages`,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
