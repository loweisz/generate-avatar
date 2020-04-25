import { md5 } from "./md5hash";

interface UUIDSvgData {
  paths: string[];
  colors: string[];
  background: string;
}

function hexToRgb(hex: string) {
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return r + "," + g + "," + b;
}

export function invertHex(hex: string): string {
  return (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase();
}

export function generatePath(curveVal: number, posVal: number, index: number) {
  const cVal = curveVal;
  const bigC = 300 - cVal;

  const pos = posVal;
  return `m 150 ${100 + pos + 200 * index} Q ${bigC} ${cVal} ${
    200 - pos - 200 * index
  } 150 Q ${bigC} ${bigC} 150 ${200 - pos - 200 * index} Q ${cVal} ${bigC} ${
    100 + pos + 200 * index
  } 150 Q ${cVal} ${cVal} 150 ${100 + pos + 200 * index} z`;
}

function hydrateSVGBlog(data: UUIDSvgData): string {
  const svgString = `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect id="bg" width="300" height="300" fill="rgb(${hexToRgb(
    data.background
  )})" /><path d="${data.paths[0]}" fill="rgb(${hexToRgb(
    data.colors[0]
  )})" /><path d="${data.paths[1]}" fill="rgb(${hexToRgb(
    data.colors[1]
  )})" /><path d="${data.paths[2]}" fill="rgb(${hexToRgb(
    data.colors[2]
  )})" /></svg>`;
  return svgString;
}

export function generateFromString(id: string): string {
  const idArr = md5(id)
    .split("")
    .filter((el) => el !== "-");
  const backgroundColor = idArr.splice(0, 6).join("");
  const elColor = idArr.splice(idArr.length - 6, idArr.length).join("");
  const arr = [...Array(10)].map(() =>
    parseInt(idArr.splice(0, 2).join(""), 16)
  );
  const data = {
    paths: [
      generatePath(arr[0], arr[1], 2),
      generatePath(arr[2], arr[3], 1),
      generatePath(arr[4], arr[5], 0),
    ],
    colors: [elColor, invertHex(elColor), invertHex(backgroundColor)],
    background: backgroundColor,
  };
  return hydrateSVGBlog(data);
}
