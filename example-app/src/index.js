import { generateFromUUID } from "../../lib/index";
import { v4 as uuidv4 } from "uuid";
const path = document.getElementById("genPath");
const path2 = document.getElementById("genPath2");
const container = document.getElementById("bg");

const newObj = generateFromUUID(uuidv4());
container.setAttribute("fill", `#${newObj.background}`);
path.setAttribute("fill", `#${newObj.color}`);
path2.setAttribute("fill", `#${newObj.color}`);

path.setAttribute("d", newObj.path);
path2.setAttribute("d", newObj.path);
