import credentials from "./credentials.js";

/**
 * Accepts String reference to file and returns File
 * @param {String} reference
 * @returns {File} File
 */
export const get = (reference) => {
  var raw = JSON.stringify({
    userId: credentials.userId,
    apiKey: credentials.apiKey,
    projectId: credentials.projectId,
    projectName: credentials.projectName,
    reference: reference,
  });

  var requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
  };

  fetch("http://localhost:3000/get/getFile", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

/**
 * Accepts String reference to file and returns File
 * @param {String} reference
 * @returns {Object} File Details
 */
export const getMetaData = (reference) => {
  var raw = JSON.stringify({
    userId: credentials.userId,
    apiKey: credentials.apiKey,
    projectId: credentials.projectId,
    projectName: credentials.projectName,
    reference: reference,
  });

  var requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
  };

  fetch("http://localhost:3000/get/metadata", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
