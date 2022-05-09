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
 * @typedef {Object} bufferData
 * @property {Buffer} arrBuf file in arrayBuffer format
 * @property {String} mimetype MIME type of returned file
 */

/**
 * Accepts String reference to file and returns File as buffer
 * @param {String} reference path of the file that you want to retrive
 * @param {String} fileName name of the file that you want to fetch
 * @returns {bufferData} Object containing Buffer and mimeType
 * @example
 * const {file, mimeType} = getBuffer("/path/to/your/file", "filename")
 */

export async function getBuffer(reference, fileName) {
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
			"http://13.90.95.93:3000/get/getFile",
			requestOptions
		);
		const mimetype = data.headers.get("Content-Type");
		const arrBuf = await data.arrayBuffer();
		return { arrBuf, mimetype };
	} catch (err) {
		throw new Error(err);
	}
}

/**
 * Accepts String reference to file and returns File in text format
 * @param {String} reference path of the file that you want to retrive
 * @param {String} fileName name of the file that you want to fetch
 * @returns {Promise} promise of that file which resolves to String
 * @example
 * const file = getFile("/path/to/your/file", "filename")
 */

export async function getFile(reference, fileName) {
	const file = getBuffer(reference, fileName);
	const string = arrayBufferToBase64(file.arrBuf);
	return "data: " + file.mimetype + ";base64," + string;
}

/**
 * @typedef {Object} metaData
 * @property {Number} consumed Number bytes consumed by that file
 * @property {EpochTimeStamp} createdOn Timestamp of creation of required file
 * @property {String} downloadURL URL to download that file (But the contents will be encrypted)
 * @property {String} extension extension of that file
 * @property {String} fileName filename of that file
 * @property {String} hash Hash of that file
 * @property {String} mimeType mimeType of that file
 */

/**
 * Accepts String reference to file and returns file metadata
 * @param {String} reference path of the file
 * @returns {metaData} File Details
 * @example
 * const fileMetaData = getMetaData("/path/to/your/file")
 * console.log(fileMetaData)
 * // {
 * //     consumed: 811037,
 * //     createdOn: 1649670678182,
 * //     downloadURL:
 * //         "https://ipfs.io/ipfs/QmTHR8Lg6FasbhRN9SpRKWgavSkL4EXnauxQQeaXJJLde4",
 * //     extension: "jpg",
 * //     fileName: "file6",
 * //     hash: "QmTHR8Lg6FasbhRN9SpRKWgavSkL4EXnauxQQeaXJJLde4",
 * //     mimetype: "image/jpeg",
 * // };
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

	return fetch("http://13.90.95.93:3000/get/metadata", requestOptions)
		.then((response) => response.text())
		.catch((error) => console.log("error", error));
}
