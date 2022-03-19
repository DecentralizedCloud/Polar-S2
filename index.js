import fs from "fs"

import init from "./src/initialize.js";
import add from "./src/add.js";

export { default as init } from "./src/initialize.js";
export { default as uploadFile} from "./src/add.js"

init({userId: "abcdefghi", apiKey: "testjasfbhw", projectId: "proj123qwe", projectName: "xyzabc"})

const file = fs.readFileSync("abc.txt")
console.log(file)

add("abc.txt","/temp/temp10", file);