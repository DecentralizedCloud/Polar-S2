import { setData } from "./store.js";

/**
 * @param {{APIKey: String, userId: String, projectId: String, projectName: String}}
 */
const init = ({ APIKey, userId, projectId, projectName }) => {
  setData({ APIKey, userId, projectId, projectName });
};

export default init;
