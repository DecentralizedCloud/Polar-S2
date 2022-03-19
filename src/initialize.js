import credentials from "./credentials.js";

/**
 * @param {{apiKey: String, userId: String, projectId: String, projectName: String}}
 */
const init = ({ apiKey, userId, projectId, projectName }) => {
  credentials.setCredential = { apiKey, userId, projectId, projectName };
};

export default init;
