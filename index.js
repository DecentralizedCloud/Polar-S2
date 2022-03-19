import init from "./src/initialize.js";
import add from "./src/add.js";
import remove from "./src/remove.js";

export { default as init } from "./src/initialize.js";
export { default as uploadFile} from "./src/add.js"
export { default as remove} from "./src/remove.js"

init({userId: "abcdefghi", apiKey: "testjasfbhw", projectId: "proj123qwe", projectName: "xyzabc"})

remove("/test/testFile")