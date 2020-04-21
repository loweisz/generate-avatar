import { generateFromUUID } from "../../lib/index";
import { v4 as uuidv4 } from "uuid";

const newBlob = generateFromUUID(uuidv4());
const img = document.getElementById("image");
const objectURL = URL.createObjectURL(newBlob);
img.src = objectURL;

console.log(newBlob);
