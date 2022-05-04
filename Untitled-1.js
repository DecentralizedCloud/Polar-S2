import credentials from "./credentials.js";
import fetch from "node-fetch";

function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

/**
 * Accepts String reference to file and returns File
 * @param {String} reference
 * @param {String} fileName
 * @returns {Promise} File
 */

export const getBuffer = async (reference, fileName) => {
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

    try {
        const data = await fetch(
            "http://localhost:3000/get/getFile",
            requestOptions
        );

        const mimetype = data.headers.get("Content-Type");
        const arrBuf = await data.arrayBuffer();

        return { arrBuf, mimetype };
    } catch (err) {
        throw new Error(err);
    }
};
export const get = async (reference, fileName) => {
    const file = await getBuffer(reference, fileName);
    const string = arrayBufferToBase64(file.arrBuf);
    return "data: " + file.mimetype + ";base64," + string;
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
