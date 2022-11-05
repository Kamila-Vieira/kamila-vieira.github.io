import { Api } from "../../services/api/index.mjs";

export const User = {
  init: () => {
    User.updateInitialUserData();
  },

  updateInitialUserData: async () => {
    const data = await Api.getUserData();
    console.log(data);
  },
};
