import fetch from "node-fetch";
import credentials from "./credentials.js";

/**
 * Removes File/Folder from Polar-S2
 * @param {string} reference path to folder or file you want to delete
 * @example
 * remove("/path/of/file");
 */
const remove = (reference) => {
    var raw = JSON.stringify({
        userId: credentials.userId,
        apiKey: credentials.apiKey,
        projectId: credentials.projectId,
        projectName: credentials.projectName,
        reference: reference,
    });

    var requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: raw,
        redirect: "follow",
    };

    fetch("http://localhost:3000/delete", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
};

export default remove;
