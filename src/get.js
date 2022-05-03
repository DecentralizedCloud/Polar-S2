import credentials from "./credentials.js";
import fetch from "node-fetch";

/**
 * Accepts String reference to file and returns File as buffer
 * @param {String} reference path of the file that you want to retrive
 * @param {String} fileName name of the file that you want to fetch
 * @returns {Promise} promise of that file
 */
export function getBuffer(reference, fileName) {
  var raw = JSON.stringify({
    userId: credentials.userId,
    apiKey: credentials.apiKey,
    projectId: credentials.projectId,
    projectName: credentials.projectName,
    reference: reference + "/" + fileName,
  });

  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
  };

  return fetch("http://localhost:3000/get/getFile", requestOptions);
}

/**
 * Accepts String reference to file and returns file metadata
 * @param {String} reference path of the file
 * @returns {Object} File Details
 */
export function getMetaData(reference) {
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

  return fetch("http://localhost:3000/get/metadata", requestOptions)
    .then((response) => response.text())
    .catch((error) => console.log("error", error));
}


/**
 * Accepts String reference to file and returns File in text format
 * @param {String} reference path of the file that you want to retrive
 * @param {String} fileName name of the file that you want to fetch
 * @returns {Promise} promise of that file
 */
export async function getFile (reference, fileName) {
  const data = await getBuffer(reference, fileName);
  return data.text();
}