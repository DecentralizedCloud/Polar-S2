import credentials from "./credentials.js";
import fetch from "node-fetch";

/**
 * Accepts String reference to file and returns File
 * @param {String} reference
 * @param {String} fileName
 * @returns {Promise} File
 */

const getBufferFromServer = (reference, fileName) => {
  var raw = JSON.stringify({
    userId: credentials.userId,
    apiKey: credentials.apiKey,
    projectId: credentials.projectId,
    projectName: credentials.projectName,
    reference: reference + "/" + fileName,
  });

  // console.log(raw);

  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
  };

  // try {
  //   const data = await fetch(
  //     "http://localhost:3000/get/getFile",
  //     requestOptions
  //   );
  //   console.log(data);
  //   return data;
  // } catch (err) {
  //   throw new Error(err);
  // }

  return fetch("http://localhost:3000/get/getFile", requestOptions);
};
export const get = async (reference, fileName) => {
  const data = await getBufferFromServer(reference, fileName);
  // console.log(JSON.parse(data.headers)[["content-type"]]);
  return data.text();
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
