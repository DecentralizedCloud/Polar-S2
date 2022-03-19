import FormData from "form-data";
import credentials from "./credentials.js";
import fetch from "node-fetch";

const formdata = new FormData();


/**
 * Uploads the given file to the polar-s3, references will contain path where to store file
 * @param {string} fileName 
 * @param {string} reference 
 * @param {string} file 
 */
const add = (fileName, reference, file) => {
    formdata.append("userId", credentials.userId)
    formdata.append("apiKey", credentials.apiKey)
    formdata.append("projectId", credentials.projectId)
    formdata.append("projectName", credentials.projectName)
    formdata.append("file", file, file.name)
    formdata.append("fileName", fileName)
    formdata.append("reference", reference)  
    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/upload/uploadToBucket", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export default add;