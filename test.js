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
