import { init, getFile, getMetaData } from "./index.js";
init({
    apiKey: "testjasfbhw",
    projectId: "proj123qwe",
    projectName: "xyzabc",
    userId: "abcdefghi",
});
// const data = await getFile("/abcd", "file6");
console.log(await getFile("/abcd", "file6"));

//TODO: fix typos, text format of file with MIME type

// console.log("Data: ", arrBuf);
// let bs64 = new Uint8Array(arrBuf);
// const reduces = bs64.reduce((data, byte) => {
//     return data + String.fromCharCode(byte);
// });

// console.log(JSON.parse(data.headers)[["content-type"]]);
// const tempData = await data.text();
// const file = Buffer.toString()
// console.log(tempData);
// return data.text();
