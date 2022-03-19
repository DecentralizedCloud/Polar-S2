export const data = {
  APIKey: "",
  userId: "",
  projectId: "",
  projectName: "",
};

export const setData = (credentials) => {
  data.APIKey = credentials.APIKey;
  data.projectId = credentials.projectId;
  data.projectName = credentials.projectName;
  data.userId = credentials.userId;
};
